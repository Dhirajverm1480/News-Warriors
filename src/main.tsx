import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App.tsx";
import NewsContextProvider, { NewsContext } from "./context/NewsContext.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <NewsContextProvider>
        <App />
      </NewsContextProvider>
    </BrowserRouter>
  </StrictMode>,
);
