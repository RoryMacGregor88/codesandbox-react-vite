import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "@src/App/App";

const rootElement = document.getElementById("root");
if (!rootElement) {
  throw "Error!";
}
const root = ReactDOM.createRoot(rootElement);
root.render(<App />);
