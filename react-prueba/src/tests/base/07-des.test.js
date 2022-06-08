const retornaArreglo = require("../../base/07-deses-arr");

describe.skip("Probar el archivo destructuracion", () => {
  test("Que retorne un arreglo", () => {
    const [letras, numero] = retornaArreglo(); //['ABC', 123]

    expect(letras).toBe("ABC")
    expect(typeof letras).toBe("string") //espero que el tipo de letras sea string

    expect(numero).toBe(123)
    expect(typeof numero).toBe("number")

  });
});
