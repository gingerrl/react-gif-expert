import { useFetchGifs } from "../../src/hooks/useFetchGifs";
import { renderHook, waitFor } from "@testing-library/react";
describe("PRueba useFetchGifs", () => {
  test("debe devolver el estado inicial", () => {
    const { result } = renderHook(() => useFetchGifs("One Punch"));
    const { images, isLoading } = result.current;

    expect(images.length).toBe(0);
    expect(isLoading).toBeTruthy();
  });

  test("debe devolver un arreglo de imagenes y isLoading en false", async () => {
    const { result } = renderHook(() => useFetchGifs("One Punch"));

    await waitFor(() =>
      expect(result.current.images.length).toBeGreaterThan(0)
    );
    const { images, isLoading } = result.current;
    expect(images.length).toBeGreaterThan(0);
    expect(isLoading).toBeFalsy();
  });
});
