import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { RadioProvider } from "./Context/radio-context";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RadioProvider>
      <App />
    </RadioProvider>
  </React.StrictMode>
);
