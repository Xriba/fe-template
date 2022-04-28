import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "src/store";
import worker from "src/mocks/browser";
import { BrowserRouter } from "react-router-dom";
import "@xriba/ui/index.css";
import "@xriba/ui/style.css";
import { Theme } from "@xriba/ui";
import App from "./App";
import "./index.scss";

worker.start({ onUnhandledRequest: "bypass" }).then();

ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <Provider store={store}>
            <Theme themeClassName="xb-theme-crm">
                <BrowserRouter>
                    <App />
                </BrowserRouter>
            </Theme>
        </Provider>
    </React.StrictMode>
);
