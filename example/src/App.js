import React from 'react'

import { DatePicker } from '@tsamantanis/react-datepicker'
import '@tsamantanis/react-datepicker/dist/index.css'

const App = () => {
  return <DatePicker
  timezone="America/Los_Angeles" // Check moment-timezone documentation
  disabled={[]} // (Optional) Array of dates to appear disabled
  multiple={3} // (Optional) Number of dates to be selected
  consecutive={2} // (Optional) Number of consecutive days to appear selected
  onDayClick={(selectedDates) => console.log(selectedDates)}
  onMonthChange={(month) => console.log(month)}
/>
}

export default App
