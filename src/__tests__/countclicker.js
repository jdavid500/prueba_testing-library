import "@testing-library/jest-dom/extend-expect";
import React from "react";
import { render, fireEvent } from "@testing-library/react";
import CountClicker from "../CountClicker";
describe("CountClicker", () => {
  //
  //
  //
  //
  //
  //
  //
  //
  //
  // ejemplo 4
  // Como interctuar con el html
  //
  it("actualiza el recuento de clics al hacer clic", () => {
    const { getByText } = render(<CountClicker />);
    const btn = getByText("Click aqui!");
    getByText("Clicks: 0");
    // haz clic en él!
    fireEvent.click(btn);
    getByText("Clicks: 1");
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
  // ejemplo 5
  // Trampa de seguridad, si no puedes consultar tu recurso
  // fácilmente, siempre puedes añadir un data-testid
  //
  it("borra el recuento de clics al hacer un clic en limpiar", () => {
    const { getByText, getByTestId } = render(<CountClicker />);
    // selector
    const btn = getByText("Click aqui!");
    getByText("Clicks: 0");
    // haz clic en él!
    fireEvent.click(btn);
    getByText("Clicks: 1");

    const clear = getByTestId("clear-btn");
    fireEvent.click(clear);
    getByText("Clicks: 0");
  });
});
