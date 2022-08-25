import { createContext, useState } from 'react'


export const CounterContext = createContext();


export default function CounterContextProvider({ children }) {
  let [state, setState] = useState(90);
  const increment = () => setState(state++)
  const decrement = () => setState(state--)

  return (
    <CounterContext.Provider value={{ counter: state, increment, decrement }}>
      {children}
    </CounterContext.Provider>
  )
}
