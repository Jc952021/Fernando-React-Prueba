import React from 'react'
import useCounter from '../../hooks/useCounter'

const CounterWithCustom = () => {
 
 const {restar,reset,sumar,state} = useCounter()

  return (
    <div>
      {state}
      <button onClick={()=>sumar(2)}>Sumar</button>
      <button onClick={()=>restar(2)}>Restar</button>
      <button onClick={reset}>Reset</button>
    </div>
  )
}

export default CounterWithCustom