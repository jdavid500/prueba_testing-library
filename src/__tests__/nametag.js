import "@testing-library/jest-dom/extend-expect";
import React from "react";
import { render } from "@testing-library/react";
import NameTag from "../NameTag";
describe("Nombre Tag", () => {
  //
  //
  //
  //
  //
  //
  // ejemplo 1
  // como renderizar un componente por testing
  //
  it("renders", () => {
    render(<NameTag firstName="Kevin" lastName="Kelly" />);
  });

  //
  //
  //
  //
  //
  //
  //
  //
  //
  // ejemplo 2
  // como hacer debug
  //
  it("puede imprimir el debug del render", () => {
    const { debug } = render(<NameTag firstName="Kevin" lastName="Kelly" />);
    debug();
  });

  //
  //
  //
  //
  //
  //
  //
  //
  //
  // ejemplo 3
  // Cómo consultar el texto esperado
  //
  it("puede probar el texto", () => {
    const { getByText, queryByText } = render(
      <NameTag firstName="Kevin" lastName="Kelly" />
    );
    getByText("hola!");
    getByText(/hola/);
    expect(queryByText("hola persona")).toBeFalsy();
  });
});
