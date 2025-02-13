import { render, screen } from "@testing-library/react";
import { GifItem } from "../../src/components/GifItem";

describe("Pruebas en GifItem", () => {
  const title = "Saitema";
  const url = "https://one-punch/";

  test("debe hacer match con snapshot ", () => {
    const { container } = render(<GifItem title={title} url={url} />);

    expect(container).toMatchSnapshot();
  });

  test("debe de mostrar la imagen con el Ur; y el Alt indicado ", () => {
    render(<GifItem title={title} url={url} />);

    // expect(screen.getByRole('img').src).toBe(url)
    const { src, alt } = screen.getByRole("img");
    expect(src).toBe(url);
    expect(alt).toBe(alt);
  });

  test("debe mostar el titulo en el componente ", () => {
    render(<GifItem title={title} url={url} />);
    expect(screen.getByText(title)).toBeTruthy();
  });
});
