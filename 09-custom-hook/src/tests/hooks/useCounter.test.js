import { act, renderHook } from "@testing-library/react-hooks";
import useCounter from "../../hooks/useCounter";

describe.skip("UseCounter", () => {
  test("Probando UseCounter", () => {
    const { result } = renderHook(() => useCounter());
    const { counter, decrementar, incrementar, reset } = result.current;
    expect(counter).toBe(10);
    expect(typeof decrementar).toBe("function");
    expect(typeof incrementar).toBe("function");
    expect(typeof reset).toBe("function");
  });

  test("Probar la funcion incrementar", () => {
    const { result } = renderHook(() => useCounter());
    const { incrementar } = result.current;

    act(() => {
      incrementar();
    });

    const { counter } = result.current;
    expect(counter).toBe(11);
  });
});
