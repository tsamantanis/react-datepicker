/* eslint-disable import/no-duplicates */
import { useState } from 'react'
import _ from 'lodash'
import moment from 'moment-timezone'
import cn from 'classnames'
import classNames from 'classnames'

import { dayFormat } from '../../constants/datetime'
import styles from '../../styles.module.css'

const CalendarDates = ({
  timezone,
  dates,
  disabled,
  multiple,
  consecutive,
  onDayClick,
  calendarStyles
}) => {
  const [selectedDates, setSelectedDates] = useState([])

  disabled = disabled || []
  consecutive = consecutive || 1
  multiple = multiple || 1

  const handleDayClick = (day) => {
    let updatedDates

    if (_.includes(selectedDates, day)) {
      updatedDates = _.remove(selectedDates, (d) => d !== day)
    } else if (multiple && _.keys(selectedDates).length < multiple) {
      updatedDates = _.union(selectedDates, [day])
    } else if (!multiple) {
      updatedDates = _.remove(selectedDates, (d) => d === day)
    }

    if (updatedDates) {
      setSelectedDates(updatedDates)
      onDayClick(updatedDates)
    } else {
      onDayClick(selectedDates)
    }
  }

  if (!dates) return null

  const firstDayOfWeek = dates[0].format('d')
  const emptyStartDays = _.range(firstDayOfWeek, 0, -1).map((i) => (
    <span
      className={styles.dateValue}
      key={`emptyStart-${i}`}
      style={calendarStyles.date}
    />
  ))

  const lastDayOfWeek = dates[dates.length - 1].format('d')
  const emptyEndDays = _.range(lastDayOfWeek, 6).map((i) => (
    <span
      className={styles.dateValue}
      key={`emptyEnd-${i}`}
      style={calendarStyles.date}
    />
  ))

  const calendarOutput = dates.map((date) => {
    const day = date.format(dayFormat)

    const consecutiveDisabledDays = []

    if (consecutive) {
      _.each(selectedDates, (day) => {
        for (let i = 1; i < parseInt(consecutive); i++) {
          consecutiveDisabledDays.push(
            moment.tz(day, timezone).add(i, 'days').format(dayFormat)
          )
        }
      })
    }

    const now = moment().tz(timezone)
    const isToday = date.isSame(now, 'day')
    const isSelected =
      _.includes(selectedDates, day) || _.includes(consecutiveDisabledDays, day)
    const isDisabled =
      _.includes(disabled, day) ||
      (selectedDates.length === multiple &&
        !_.includes(selectedDates, day) &&
        !_.includes(consecutiveDisabledDays, day))
    return (
      <span
        key={day}
        className={cn(styles.date, {
          [styles.dateCurrent]: isToday,
          [styles.dateSelected]: isSelected,
          [styles.dateHover]: !isDisabled && !isSelected,
          [classNames(styles.textMuted, styles.cursorDisabled)]: isDisabled
        })}
        onClick={!isDisabled ? () => handleDayClick(day) : null}
        style={
          isDisabled
            ? calendarStyles.disabled
            : isSelected
            ? calendarStyles.selected
            : isToday
            ? calendarStyles.current
            : {}
        }
      >
        {date.format('D')}
      </span>
    )
  })

  return (
    <React.Fragment>
      {emptyStartDays}
      {calendarOutput}
      {emptyEndDays}
    </React.Fragment>
  )
}

export default CalendarDates
