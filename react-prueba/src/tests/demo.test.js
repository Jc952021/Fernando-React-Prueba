describe('pruebas en el archivo demo test', () => { 

  test.skip('deben ser iguales los strings ', () => {
  //inicializacion
  const mensaje = "Hola"
  //estimulo
  const mensajeDos = "Hola"
  //prueba
  expect(mensaje).toBe(mensajeDos)
   })
 })