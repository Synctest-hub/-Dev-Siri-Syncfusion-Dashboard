import React, { lazy } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./App.css";

const App = lazy(() => import("./App"));
const ContextProvider = lazy(() => import("./context/ContextProvider"));

const root = createRoot(document.getElementById("root")!);

root.render(
  <React.StrictMode>
    <ContextProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ContextProvider>
  </React.StrictMode>
);
