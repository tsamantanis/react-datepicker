# React Datepicker react-datepicker

A simple, responsive react calendar component for selecting one or many dates in the near past or future.

## Example

View an example of the component [here](https://tsamantanis.github.io/react-datepicker)

## Install

```bash
npm install --save @tsamantanis/react-datepicker
```

## Usage

```jsx
import React from 'react'
import ReactDOM from 'react-dom'
import { DatePicker } from '@tsamantanis/react-datepicker'

import reportWebVitals from './reportWebVitals'

ReactDOM.render(
  <React.StrictMode>
    <DatePicker
      timezone="America/Los_Angeles" // Check moment-timezone documentation
      disabled={[]} // (Optional) Array of dates to appear disabled
      multiple={3} // (Optional) Number of dates to be selected
      consecutive={2} // (Optional) Number of consecutive days to appear selected
      onDayClick={(selectedDates) => console.log(selectedDates)}
      onMonthChange={(month) => console.log(month)}
    />
  </React.StrictMode>,
  document.getElementById('root')
)
```

## Contributions

If you are interested in contributing to this project, please open an issue with a description of what you would like to add.

## License

MIT © [tsamantanis](https://github.com/tsamantanis)
