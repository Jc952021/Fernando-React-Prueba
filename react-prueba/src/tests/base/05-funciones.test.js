const { getUser, getUsuarioActivo } = require("../../base/05-funciones");
//funciones retorna un objeto de funciones,por eso se destructura

describe.skip("Probando el archivo funciones", () => {
  test("getUser debe retornar un objeto", () => {
    const User = getUser();
    const userTest = {
      uid: "ABC123",
      username: "El_Papi1502",
    };
    expect(User).toEqual(userTest);
  });

  test("Probando la segunda funcion con un parametro", () => {
    const nombre = "Manco";
    const funcion = getUsuarioActivo(nombre);

    expect(funcion).toEqual({
      uid: "ABC567",
      username: nombre,
    });
  });
});
