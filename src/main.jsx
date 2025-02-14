import {createRoot} from "react-dom/client";
import {StrictMode} from "react";
import {App} from "./App";
import {GlobalStyles} from "./assets/GlobalStyles";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <GlobalStyles />
    <App />
  </StrictMode>
);
