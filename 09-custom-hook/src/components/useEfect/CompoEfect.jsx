import React, { useState } from 'react'
import Message from './Message'

const CompoEfect = () => {

  const [form, setForm] = useState({
    name:""
  })
const {name} = form

const handleChange=({target})=>{
setForm({
  ...form,
  [target.name]:target.value
})
}

  return (
    <form>
      {name}
      <input type="text" name="name" value={name} onChange={handleChange}/>
      {name === "123" && <Message/>}
    </form>
  )
}

export default CompoEfect