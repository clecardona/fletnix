import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { AuthProvider } from "state/AuthProvider";
import { TitlesProvider } from "state/TitlesProvider";

ReactDOM.render(
  <React.StrictMode>
    <AuthProvider>
      <TitlesProvider>
        <TitlesProvider>
          <App />
        </TitlesProvider>
      </TitlesProvider>
    </AuthProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
