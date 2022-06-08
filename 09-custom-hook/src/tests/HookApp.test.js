import React from "react";
import HookApp from "../HookApp";
import { render } from "@testing-library/react";

describe.skip("Probando HookApp", () => {
  test("Debe mostrarse correctamente", () => {
    const componente = render(<HookApp />);
    componente.getByText("HookApp");
  });
});
