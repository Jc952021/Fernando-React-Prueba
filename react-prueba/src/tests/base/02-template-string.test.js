require("@testing-library/jest-dom");

const getSaludo = require("../../base/02-template-string")

describe.skip("probando el archivo template-string", () => {

  test('getSaludo debe devolver "Hola Manco" ', () => {
    const nombre = "Manco";
    const saludo = getSaludo(nombre);
    expect(saludo).toBe("Hola " + nombre)
  });

  test('getSaludo debe devolver el valor por defecto Prueba', () => { 
    const saludo = getSaludo()
    expect(saludo).toBe("Hola Prueba")
   })
});
