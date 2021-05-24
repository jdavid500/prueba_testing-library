import React from "react";
import { render } from "@testing-library/react";
import AsyncNameTag from "../AsyncNameTag";
describe("AsyncNameTag", () => {
  //
  //
  //
  //
  //
  //
  //
  //
  //
  // ejemplo que demuestra el fracaso de async
  //
  it("Muestra el estado de carga inicialmente", () => {
    const { getByText } = render(<AsyncNameTag />);
    getByText("Loading...");
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
  // ejemplo que demuestra el éxito de async
  //
  it("Muestra el nombre del usuario una vez cargado", async () => {
    const { findByText } = render(<AsyncNameTag />);
    await findByText("nombre: Kevin");
    findByText("apellido: Kelly");
  });
});
