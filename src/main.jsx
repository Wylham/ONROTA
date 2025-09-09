import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import "@fontsource/inter/400.css"; // normal
import "@fontsource/inter/600.css"; // semi-bold (se precisar)
import "@fontsource/inter/700.css"; // bold (opcional)

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
