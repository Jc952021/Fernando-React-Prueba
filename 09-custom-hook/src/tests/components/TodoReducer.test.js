import todoReducer from "../../components/08-useReducer/todoReducer";

const todos = [
  {
    id: 1,
    desc: "prueba1",
    done: false,
  },
  {
    id: 2,
    desc: "prueba2",
    done: false,
  },
];
//el todo reducer es solo una funcion que retorna un state arreglo
describe.skip("Proban", () => {
  test("Ver que me traiga lo que le mando al reducer", () => {
    const state = todoReducer(todos, {});
    expect(state).toEqual(todos);
  });

  test("Ver que me traiga lo que le mando al reducer,ahora que use el add", () => {
    const payload = {
      id: 3,
      desc: "siuu",
      done: false,
    };
    const action = {
      type: "add",
      payload,
    };
    const state = todoReducer(todos, action);
    expect(state).toEqual([...todos, payload]);
  });

  test("Ver que me traiga lo que le mando al reducer,ahora que use el delete", () => {
    
    const action = {
      type: "delete",
      payload:3
    };
    const state = todoReducer(todos, action);
    expect(state).toEqual(todos);
  });

  test("Ver que me traiga lo que le mando al reducer,ahora que use el toggle", () => {
    
    const action = {
      type: "toggle",
      payload:1
    };
    const state = todoReducer(todos, action);
    expect(state[0].done).toBe(true);
  });
});
