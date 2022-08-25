import React, { useContext } from 'react'
import { CounterContext } from './context/counterContext'

export default function App() {

  const { counter, increment, decrement } = useContext(CounterContext);
  return (
    <div>
      App
      <div>
        {counter}
      </div>

      <div>
        <button onClick={increment}>Increase</button>
        <button onClick={decrement}>Decrease</button>
      </div>
    </div>
  )
}
