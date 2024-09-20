import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Home from "./views/HomePage.jsx";
import Header from "./components/Header.jsx";
import "./styles/css/index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Header />
    <Home />
  </StrictMode>
);
