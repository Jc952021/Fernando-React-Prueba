import React from "react";
import { fireEvent, prettyDOM, render } from "@testing-library/react";
import TodoAdd from "../../components/08-useReducer/components/TodoAdd";

describe.skip("Prob", () => {
  const mockhandler = jest.fn();
  test("todoAdd", () => {
    const componente = render(<TodoAdd handleAdd={mockhandler} />);
    //console.log(prettyDOM(componente.container))
    const input = componente.getByLabelText("Nombre");
    fireEvent.change(input, { target: { value: "ayuda" } });
    const button = componente.getByText("Agregar");
    fireEvent.click(button);

    expect(mockhandler).toHaveBeenCalledTimes(1);
    expect(mockhandler).toHaveBeenCalledWith({
      payload: {
        desc: "ayuda",
        done: false,
        id: expect.any(Number),
      },
      type: "add",
    });
  });
});
