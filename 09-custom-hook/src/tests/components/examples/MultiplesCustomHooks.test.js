import React from "react";
import {prettyDOM, render} from "@testing-library/react"
import MultiplesCustomHooks from "../../../components/examples/MultiplesCustomHooks";
import useFetch from "../../../hooks/useFetch";
import useCounter from "../../../hooks/useCounter";
jest.mock("../../../hooks/useFetch");


describe.skip("Probando mult", () => {
  test("Ver si renderiza", () => {
    useFetch.mockReturnValue({
      data: null,
      loading: true,
      error: null
    });
    
    
    let component = render(<MultiplesCustomHooks/>)  

    const p = component.getByText("Cargando...")
     expect(p).toHaveTextContent("Cargando...")
  });

  test("Debe mostrar la informacion", () => {
    useFetch.mockReturnValue({
      loading: false,
      data: [{
        author:"xd",
        quote:"ayuda"
      }],
      error: null
    });
    let component = render(<MultiplesCustomHooks/>)  
     const p = component.getByText("ayuda")
     expect(p).toHaveTextContent("ayuda")
    console.log(prettyDOM(component.container))
  });

});
