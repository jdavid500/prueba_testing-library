import React from "react";
import { render } from "react-dom";
import NameTag from "./NameTag";
import CountClicker from "./CountClicker";
import AsyncNameTag from "./AsyncNameTag";
import "./index.css";
const App = () => (
  <div>
    <div className="card">
      <h3>Tarjeta</h3>
      <NameTag firstName="Kevin" lastName="Kelly" />
    </div>
    <div className="card">
      <h3>Contador de Clicks</h3>
      <CountClicker />
    </div>
    <div className="card">
      <h3>Tarjeta asincrona</h3>
      <AsyncNameTag />
    </div>
  </div>
);

render(<App />, document.getElementById("root"));
