import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import "./app.css";
import App from "./App";
import { StoreProvider } from "./components";
import { IconContext } from "react-icons";

const container = document.getElementById("root");
createRoot(container).render(
    <StrictMode>
        <StoreProvider>
            <IconContext.Provider value={{ size: 24 }}>
                <App />
            </IconContext.Provider>
        </StoreProvider>
    </StrictMode>
);