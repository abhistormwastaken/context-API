// using context API to teleport data from global context to any component
import React, { useContext, useState } from 'react'
import { countContext } from './context';

function App() {
  const [count, setCount] = useState(0);
  
  return (
    <div>
      <countContext.Provider value={{ count, setCount }}>
        <Count></Count>
      </countContext.Provider>
    </div>
  )
}

function CountRenderer() {
  const count = useContext(countContext).count
  return <div>
    {count}
  </div>
}

function Count() {
  console.log("Count rendered wtfff Context API is bad")
  return (
    <div>
      <CountRenderer></CountRenderer>
      <ButtonRenderer></ButtonRenderer>
    </div>
  )
}

function ButtonRenderer() {
  const { count, setCount } = useContext(countContext)
  return <div>
    <button onClick={() => {setCount(count + 1)}}>Increment</button>
    <button onClick={() => {setCount(count - 1)}}>Decrement</button>
  </div>
}

export default App