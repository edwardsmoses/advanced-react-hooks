// useReducer: simple Counter
// http://localhost:3000/isolated/exercise/01.js

import * as React from 'react'

function Counter({initialCount = 0, step = 10}) {
  // 🐨 replace React.useState with React.useReducer.
  // 💰 React.useReducer(countReducer, initialCount)

  const stateReducer = (currentState, action) => {
    const correctPasscode = '4256'

    const passcode = currentState.typedPasscode + action

    if (passcode.length === correctPasscode.length) {
      return {
        status: correctPasscode === passcode ? 'UNLOCKED' : 'LOCKED', //if passcode is correct, unlock the device
        typedPasscode: '',
      }
    }

    return {
      ...currentState,
      typedPasscode: passcode,
    }
  }

  const [state, dispatch] = React.useReducer(stateReducer, {
    status: 'LOCKED',
    typedPasscode: '',
  })

  const {status, typedPasscode} = state

  const unlock = value => dispatch(value)

  return (
    <>
      <h1 style={{textAlign: 'center'}}>{status}</h1>
      <h3 style={{textAlign: 'center'}}>{typedPasscode}</h3>
      <div style={{display: 'flex', justifyContent: 'center'}}>
        <button
          onClick={() => {
            unlock(1)
          }}
          style={{padding: 10, margin: 10}}
        >
          1
        </button>
        <button
          onClick={() => {
            unlock(2)
          }}
          style={{padding: 10, margin: 10}}
        >
          2
        </button>
        <button
          onClick={() => {
            unlock(3)
          }}
          style={{padding: 10, margin: 10}}
        >
          3
        </button>
        <button
          onClick={() => {
            unlock(4)
          }}
          style={{padding: 10, margin: 10}}
        >
          4
        </button>
        <button
          onClick={() => {
            unlock(5)
          }}
          style={{padding: 10, margin: 10}}
        >
          5
        </button>
        <button
          onClick={() => {
            unlock(6)
          }}
          style={{padding: 10, margin: 10}}
        >
          6
        </button>
      </div>
    </>
  )
}

function App() {
  return <Counter />
}

export default App
