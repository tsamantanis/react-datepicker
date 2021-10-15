import React from 'react'

import { DatePicker } from '@tsamantanis/react-datepicker'
import '@tsamantanis/react-datepicker/dist/index.css'

const App = () => {
  return (
    <>
      <DatePicker
        timezone="America/Los_Angeles" // Check moment-timezone documentation
        disabled={["2021-10-09", "2021-10-10", "2021-10-19"]} // (Optional) Array of YYYY-MM-DD formatted dates to appear disabled
        multiple={3} // (Optional) Number of dates to be selected
        consecutive={2} // (Optional) Number of consecutive days to appear selected
        onDayClick={(selectedDates) => console.log(selectedDates)}
        onMonthChange={(month) => console.log(month)}
      />
      <DatePicker
        timezone="America/Los_Angeles" // Check moment-timezone documentation
        changeYear={true} // Boolean for allowing users to change calendar years
        onDayClick={(selectedDates) => console.log(selectedDates)}
        onMonthChange={(month) => console.log(month)}
        onYearChange={(year) => console.log(year)}
      />
      <DatePicker
        timezone="America/Los_Angeles" // Check moment-timezone documentation
        disabled={["2021-10-09", "2021-10-10", "2021-10-19"]} // (Optional) Array of YYYY-MM-DD formatted dates to appear disabled
        multiple={3} // (Optional) Number of dates to be selected
        consecutive={2} // (Optional) Number of consecutive days to appear selected
        onDayClick={(selectedDates) => console.log(selectedDates)}
        onMonthChange={(month) => console.log(month)}
        textColor="#ffffff"
        backgroundColor="#14aeff"
        borderRadius="10px"
        boxShadow="none"
      />
      <DatePicker
        timezone="America/Los_Angeles" // Check moment-timezone documentation
        disabled={["2021-10-09", "2021-10-10", "2021-10-19"]} // (Optional) Array of YYYY-MM-DD formatted dates to appear disabled
        multiple={3} // (Optional) Number of dates to be selected
        consecutive={2} // (Optional) Number of consecutive days to appear selected
        onDayClick={(selectedDates) => console.log(selectedDates)}
        onMonthChange={(month) => console.log(month)}
        fontFamily="'VT323', monospace"
        textColor="#000000"
        backgroundColor="#F9EFE4"
        borderRadius="0px"
        boxShadow="4px 4px #C8C2BA"
      />
    </>
  )
}

export default App
