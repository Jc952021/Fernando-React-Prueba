const getHeroeByIdAsync = require("../../base/09-promesas")
const heroes = require("../../data/heroes")



describe.skip('Probando Promesas', () => { 

  test('La funcion debe retornar un heroe', (done) => { 
    const id = 1
    getHeroeByIdAsync(id).then(h=>{
      expect(h).toEqual(heroes[0]) //espero que el heroes que me devuelve este en la pos 0
      done()
    })
   })
   
  test('La funcion debe retornar un error', (done) => { 
    const id = 10
    getHeroeByIdAsync(id).catch(h=>{
      expect(h).toBe('No se pudo encontrar el héroe') 
      done()
    })
   })

 })