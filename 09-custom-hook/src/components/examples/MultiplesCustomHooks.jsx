import React from 'react'
import useCounter from '../../hooks/useCounter'
import useFetch from '../../hooks/useFetch'

const MultiplesCustomHooks = () => {
 
  const {counter,incrementar}= useCounter(1)
  //cuando hago el set con el boton siguiente, se renderiza este compónente,ejecutando de nuevo el useFetch
  //si este tiene su [url],entonces ejecutara su fect interior ya que cambio la url
 const {data,loading} = useFetch(`https://www.breakingbadapi.com/api/quotes/${counter}`)
 const {quote,author} = data? data[0]:false //si le pongo null me da error pero si es false no
 
 
  return (
    <div className='p-5'>
      <h1 className='mb-4'>Frases</h1>
  {
  loading
    ? 
    <div className='alert alert-primary text-center'>
      <p>Cargando...</p>
    </div>
    :
    <blockquote className='blockquote'>
      <p>{quote}</p>
      <footer className='blockquote-footer'>
        {author}
      </footer>
    </blockquote>
}
   
<button className='btn btn-primary' onClick={incrementar}>
  Siguiente
</button>

    </div>
  )
}

export default MultiplesCustomHooks