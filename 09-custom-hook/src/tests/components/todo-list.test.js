import React from "react";
import { fireEvent, prettyDOM, render } from "@testing-library/react";
import TodoList from "../../components/08-useReducer/components/TodoList";
import todos from "../fixtures/todos";

describe.skip("Prob", () => {
  test("list", () => {
    const componente = render(<TodoList state={todos} />);
    //console.log(prettyDOM(componente.container))
    const li = componente.container.querySelectorAll("li")
    expect(li).toHaveLength(2)
  });
});
