import React, { useEffect, useState } from 'react'

const Message = () => {

  const [cors, setCors] = useState({
    x:0,
    y:0
  })

  const {x,y} = cors

useEffect(() => {
  
const funcion =(e)=>{
  setCors({...cors,x:e.x,y:e.y})
}

window.addEventListener("mousemove",funcion)
//al ser removido el componente message, se ejecuta la de abajo
//y cuando es llamado entonces el window de arriba se vuelve a ejecutar
//ya que si no teniamos el return de abajo,entonces al llamar al mesage tenia dos window
  return () => {
    window.removeEventListener("mouseover",funcion)
  }
}, [])


  return (
    <div>
      <h1>x: {x}</h1>
      <h1>y: {y}</h1>
    </div>
  )
}

export default Message