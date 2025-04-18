import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import "./app.css";
import App from "./App";
import { StoreProvider } from "./components";

const container = document.getElementById("root");
createRoot(container).render(
    <StrictMode>
        <StoreProvider>
            <App />
        </StoreProvider>
    </StrictMode>
);