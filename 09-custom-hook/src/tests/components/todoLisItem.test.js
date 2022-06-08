import React from "react";
import { fireEvent, prettyDOM, render } from "@testing-library/react";
import TodoListItem from "../../components/08-useReducer/components/TodoListItem";

const todo = {
  id: 1,
  desc: "ayuda",
  done: false,
};
const mockHandler = jest.fn();
const mockHandlerToogle = jest.fn();

describe.skip("Prob", () => {
  let componente;
  beforeEach(() => {
    componente = render(
      <TodoListItem doc={todo} i={1} handleDelete={mockHandler} handleToggle={mockHandlerToogle} />
    );
  });
  test("Usar el todoList", () => {
    const container = componente.container
    console.log(prettyDOM(container))
  });

  test("Usar la funcion handle", () => {
    const button = componente.getByText("Borrar");
    fireEvent.click(button);
    expect(mockHandler).toHaveBeenCalledTimes(1);
  });

  test("Usar la funcion toggle", () => {
    const p = componente.getByText("2. ayuda");
    fireEvent.click(p);
    expect(mockHandlerToogle).toHaveBeenCalledTimes(1);
  });

  test("Debe de mostrar el texto", () => {
    const p = componente.getByText("2. ayuda");
    expect(p).toHaveTextContent("2. ayuda");
  });

  test("Debe de mostrar la clase complete", () => {
    const p = componente.getByText("2. ayuda");
    expect(p).not.toHaveClass("complete");
  });
});
