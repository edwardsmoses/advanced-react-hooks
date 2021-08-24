// useContext: simple Counter
// http://localhost:3000/isolated/exercise/03.js

import * as React from 'react'

// 🐨 create your CountContext here with React.createContext
const CountContext = React.createContext()

const CountProvider = ({children}) => {
  const [count, setCount] = React.useState(0)

  return (
    <CountContext.Provider value={{count, setCount}}>
      {children}
    </CountContext.Provider>
  )
}

const useCount = () => {
  const contextValue = React.useContext(CountContext)
  if (contextValue === undefined) {
    throw Error("Can only use the 'useCount' in the 'CountProvider'")
  }

  const {count, setCount} = contextValue
  return [count, setCount]
}

function CountDisplay() {
  const [count] = useCount()
  return <div>{`The current count is ${count}`}</div>
}

function Counter() {
  const [count, setCount] = useCount()
  const increment = () => setCount(c => c + 1)
  return <button onClick={increment}>Increment count</button>
}

function App() {
  return (
    <div>
      <CountProvider>
        <CountDisplay />
        <Counter />
      </CountProvider>
    </div>
  )
}

export default App
