import React from "react";
import { fireEvent, prettyDOM, render } from "@testing-library/react";
import TodoApp from "../../components/08-useReducer/TodoApp";
import TodoAdd from "../../components/08-useReducer/components/TodoAdd";
import todos from "../fixtures/todos";

describe.skip("Prob", () => {

  Storage.prototype.setItem = jest.fn();
  
  test("todoApp", () => {
    const componente = render(<TodoApp />);
    const input = componente.getByLabelText("Nombre");
    fireEvent.change(input, { target: { value: "ayuda" } });
    const button = componente.getByText("Agregar");
    fireEvent.click(button);
    fireEvent.change(input, { target: { value: "da" } });
    fireEvent.click(button);
    expect(localStorage.setItem).toHaveBeenCalledTimes(3);

    console.log(prettyDOM(componente.container))
    
  });
});