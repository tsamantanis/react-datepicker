# React Datepicker react-datepicker

A simple, responsive react calendar component for selecting one or many dates in the near past or future.

## Example

View an example of the component [here](https://tsamantanis.github.io/react-datepicker)

## Install

```bash
npm install --save @tsamantanis/react-datepicker
```

## Usage

### Default Styles

```jsx
import React from 'react'

import { DatePicker } from '@tsamantanis/react-datepicker'
import '@tsamantanis/react-datepicker/dist/index.css'

const App = () => {
  return (
    <DatePicker
      timezone='America/Los_Angeles' // Check moment-timezone documentation
      disabled={['2021-10-09', '2021-10-19']} // (Optional) Array of YYYY-MM-DD formatted dates to appear disabled
      multiple={3} // (Optional) Number of dates to be selected
      consecutive={2} // (Optional) Number of consecutive days to appear selected
      onDayClick={(selectedDates) => console.log(selectedDates)}
      onMonthChange={(month) => console.log(month)}
    />
  )
}

export default App
```

### Changing Year

```jsx
import React from 'react'

import { DatePicker } from '@tsamantanis/react-datepicker'
import '@tsamantanis/react-datepicker/dist/index.css'

const App = () => {
  return (
    <DatePicker
      timezone='America/Los_Angeles' // Check moment-timezone documentation
      changeYear={true} // Boolean for allowing users to change calendar years
      onDayClick={(selectedDates) => console.log(selectedDates)}
      onMonthChange={(month) => console.log(month)}
      onYearChange={(year) => console.log(year)}
    />
  )
}

export default App
```

### Custom Styles

```jsx
import React from 'react'

import { DatePicker } from '@tsamantanis/react-datepicker'
import '@tsamantanis/react-datepicker/dist/index.css'

const App = () => {
  return (
    <DatePicker
      timezone='America/Los_Angeles' // Check moment-timezone documentation
      onDayClick={(selectedDates) => console.log(selectedDates)}
      onMonthChange={(month) => console.log(month)}
      fontFamily="'VT323', monospace"
      textColor='#000000'
      backgroundColor='#F9EFE4'
      border='1px solid #000000'
      borderRadius='0px'
      boxShadow='4px 4px #C8C2BA'
    />
  )
}

export default App
```

## Contributions

If you are interested in contributing to this project, please open an issue with a description of what you would like to add.

## License

MIT © [tsamantanis](https://github.com/tsamantanis)
