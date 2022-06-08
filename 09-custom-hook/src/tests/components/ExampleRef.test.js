import React from "react";
import { fireEvent, prettyDOM, render } from "@testing-library/react";
import "whatwg-fetch";
import Example from "../../components/useRef/Example";

describe.skip("example", () => {
  test("probar el example", () => {
    let componente = render(<Example />);
    console.log(prettyDOM(componente.container))
    const button = componente.getByText("Mostrar");
    fireEvent.click(button);
    // let componente2 = render(<Example />);
    const h1 = componente.getByText("Frases");
    expect(h1).toHaveTextContent("Frases");
  });
});
