const todoReducer = (stateInicial, action) => {
  switch (action.type) {
    case "add":
      return [...stateInicial, action.payload];
    case "delete":
      return stateInicial.filter((todo) => todo.id !== action.payload);
    case "toggle":
      return stateInicial.map((todo) =>
        todo.id === action.payload ? { ...todo, done: !todo.done } : todo
      );
    default:return stateInicial
     
  }
};

export default todoReducer;
