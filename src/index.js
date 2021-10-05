import React, { useEffect, useState } from 'react'
import moment from 'moment'

import CalendarDates from './components/CalendarDates'
import styles from './styles.module.css'
import classNames from 'classnames'

export const DatePicker = ({
  months,
  timezone,
  disabled,
  multiple,
  consecutive,
  onDayClick,
  onMonthChange
}) => {
  const [enabledMonths] = useState(
    months || [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]
  )
  const [month, setMonth] = useState(null)
  const [calendarDates, setCalendarDates] = useState([])

  useEffect(() => {
    const start = moment().tz(timezone).startOf('month')
    let count = 0

    while (!enabledMonths.includes(start.month()) && count < 12) {
      start.add(1, 'months')
      count++
    }

    if (count >= 12) {
      start.subtract(1, 'years')
    }

    loadCalendar(start)
  }, [])

  const loadCalendar = (month) => {
    const dates = []

    const dateIterator = moment.tz(month, timezone).startOf('month')
    const monthEnd = moment.tz(month, timezone).endOf('month')

    while (dateIterator.isSameOrBefore(monthEnd)) {
      dates.push(moment.tz(dateIterator, timezone).startOf('day'))

      dateIterator.add(1, 'day')
    }

    setMonth(month)
    setCalendarDates(dates)
    onMonthChange(month.month())
  }

  const loadPreviousMonth = () => {
    const newMonth = moment
      .tz(month, timezone)
      .subtract(1, 'month')
      .startOf('month')

    loadCalendar(newMonth)
  }

  const loadNextMonth = () => {
    const newMonth = moment.tz(month, timezone).add(1, 'month').startOf('month')

    loadCalendar(newMonth)
  }

  if (!month) return null

  // const isAfterNow = month.isAfter(moment().tz(timezone).startOf('month'))

  return (
    <div className={classNames(styles.calendar, styles.custom)}>
      <div className={styles.content}>
        <svg
          className={classNames(
            styles.floatLeft,
            styles.cursorPointer,
            styles.ml4
          )}
          onClick={loadPreviousMonth}
          viewBox='0 0 31 31'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            d='M1 15.1421L15.1421 1.00001M1.04761 15.1898L15.4957 29.6379'
            stroke='black'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
        </svg>

        {month.format('MMMM YYYY')}

        <svg
          className={classNames(
            styles.floatRight,
            styles.cursorPointer,
            styles.mr4
          )}
          onClick={loadNextMonth}
          viewBox='0 0 31 31'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            d='M15.4957 1L29.9914 15.4957M15.4957 29.9914L29.9576 15.5294'
            stroke='black'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
        </svg>
      </div>

      <span>Su</span>
      <span>Mo</span>
      <span>Tu</span>
      <span>We</span>
      <span>Th</span>
      <span>Fr</span>
      <span>Sa</span>

      <CalendarDates
        timezone={timezone}
        dates={calendarDates}
        disabled={disabled}
        multiple={multiple}
        consecutive={consecutive}
        onDayClick={onDayClick}
      />
    </div>
  )
}
