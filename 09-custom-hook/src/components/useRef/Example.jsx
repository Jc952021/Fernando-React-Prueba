import React, { useState } from 'react'
import MultiplesCustomHooks from '../examples/MultiplesCustomHooks'

const Example = () => {

const [show, setShow] = useState(false)

  return (
    <div>
      <h1>Ejemplo de useRef</h1>
      {show &&  <MultiplesCustomHooks/>}
      <button className='btn btn-primary' onClick={()=>setShow(!show)}>Mostrar</button>
    </div>
  )
}

export default Example