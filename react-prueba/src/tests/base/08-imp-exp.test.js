const heroes = require("../../data/heroes")
const {getHeroeById,getHeroesByOwner} = require("../../base/08-imp-exp")

describe.skip('Probando el archivo imp-exp', () => { 

  test('debe retornar un heroe segun el id', () => { 
    const id = 1
    const heroe = getHeroeById(id)
//de mis db de heroes buscar el hero por el id
    const heroEncontrado = heroes.find(h=>h.id === id)
//espero que el heroencon tenga sus props igual al de heroe
    expect(heroEncontrado).toEqual(heroe)
   })

   test('Debe retornar undefined si no existe', () => { 
    const heroe = getHeroeById(10)

    expect(heroe).toBeUndefined() //espero que el hero sea undefinido ya que no encontro nada
    })

    test('Debe retornar heroes de DC', () => { 
      const owner = "DC"
      const heroesFiltrados = getHeroesByOwner(owner)

      const heroesDc = heroes.filter(h=>h.owner === owner)

      expect(heroesFiltrados).toEqual(heroesDc)
    })

    test('Debe retornar heroes de Marvel y ver su longitud', () => { 
      const owner = "Marvel"
      const heroesLongitud = getHeroesByOwner(owner)


      expect(heroesLongitud).toHaveLength(2) //espero que heroeslon tenga de longitud 2
    })

 })