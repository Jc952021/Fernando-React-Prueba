import { renderHook } from "@testing-library/react-hooks";
import "whatwg-fetch";
import useFetch from "../../hooks/useFetch";

describe.skip("Probando", () => {
  test("useFetch", () => {
    const { result } = renderHook(() =>
      useFetch("https://www.breakingbadapi.com/api/quotes/1")
    );
    const { loading, data, error } = result.current;

    expect(loading).toBe(true);
    expect(data).toBe(null);
    expect(error).toBe(null);
  });

  test("useFetch await", async () => {
    const { result, waitForNextUpdate } = renderHook(() =>
      useFetch("https://www.breakingbadapi.com/api/quotes/1")
    );
    await waitForNextUpdate();
    const { loading, data, error } = result.current;

    expect(loading).toBe(false);
    expect(data).toHaveLength(1);
    expect(error).toBe(null);
  });
  test('useFetch', async() => {
    const {result,waitForNextUpdate} = renderHook(()=>useFetch("https://www.breapi.com/api/quotes/sqweqw"))
    await waitForNextUpdate();
    const {loading,data,error}=result.current

    expect(loading).toBe(false);
    expect(data).toBe(null);
    expect(error).toBe("error xd");
   })
});
