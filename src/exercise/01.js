// useReducer: simple Counter
// http://localhost:3000/isolated/exercise/01.js

import * as React from 'react'

function Counter({initialCount = 0, step = 1}) {
  // 🐨 replace React.useState with React.useReducer.
  // 💰 React.useReducer(countReducer, initialCount)

  const stateReducer = (currentState, action) => {
    if (typeof action === 'function') {
      const {...result} = action(currentState)
      console.log(result)
      return result
    }
    return {...currentState, ...action}
  }

  const [state, setState] = React.useReducer(stateReducer, {
    count: initialCount,
  })
  const {count} = state
  const increment = () =>
    setState(currentState => ({count: currentState.count + step}))

  return <button onClick={increment}>{count}</button>
}

function App() {
  return <Counter />
}

export default App
