import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import MyProject from "./MyProject";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <MyProject />
  </StrictMode>
);
