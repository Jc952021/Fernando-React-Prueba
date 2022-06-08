import { act, renderHook } from "@testing-library/react-hooks";
import useForm from "../../hooks/useForm";

describe.skip("UseForm", () => {
  const initialForm = {
    nombre: "",
    apellido: "",
  };
  test("debe regresar un formulario", () => {
    const { result } = renderHook(() => useForm(initialForm));
    const [form] = result.current;
    expect(form).toEqual(initialForm);
  });

  test("debe de cambiar el valor del formulario nombre", () => {
    const { result } = renderHook(() => useForm(initialForm));
    const [, handleChange] = result.current;
    act(() => {
      handleChange({
        target: {
          name: "nombre",
          value: "hola",
        },
      });
    });
    const [form] = result.current;
    expect(form).toEqual({ ...initialForm, nombre: "hola"});
  });

  test("debe de cambiar el valor del formulario original", () => {
    const { result } = renderHook(() => useForm(initialForm));
    const [, handleChange,reset] = result.current;
    act(() => {
      handleChange({
        target: {
          name: "nombre",
          value: "hola",
        },
      });
     reset()
    });
    const [form] = result.current;
    expect(form).toEqual(initialForm);
  });
});
