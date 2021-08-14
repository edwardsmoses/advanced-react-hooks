// useReducer: simple Counter
// http://localhost:3000/isolated/exercise/01.js

import * as React from 'react'

function Counter({initialCount = 0, step = 1}) {
  // 🐨 replace React.useState with React.useReducer.
  // 💰 React.useReducer(countReducer, initialCount)

  const stateReducer = (currentState, action) => {
    return {...currentState, ...action}
  }

  const [state, setState] = React.useReducer(stateReducer, {
    count: initialCount,
  })

  const increment = () => setState({count: state.count + step, task: "increment"})
  return <button onClick={increment}>{state.count}</button>
}

function App() {
  return <Counter />
}

export default App
