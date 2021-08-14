// useReducer: simple Counter
// http://localhost:3000/isolated/exercise/01.js

import * as React from 'react'

function Counter({initialCount = 0, step = 10}) {
  // 🐨 replace React.useState with React.useReducer.
  // 💰 React.useReducer(countReducer, initialCount)

  const stateReducer = (currentState, action) => {
    const {type, step} = action

    if (type === 'INCREMENT') {
      return {...currentState, count: currentState.count + step}
    }

    return currentState
  }

  const [state, dispatch] = React.useReducer(stateReducer, {
    count: initialCount,
  })
  const {count} = state
  const increment = () => dispatch({type: 'INCREMENT', step})

  return <button onClick={increment}>{count}</button>
}

function App() {
  return <Counter />
}

export default App
