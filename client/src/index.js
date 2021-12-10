import React, { StrictMode } from "react";
import ReactDOM from "react-dom";
import App from "./App";
import './index.css';
import { Auth0Provider } from "@auth0/auth0-react";
import { getConfig } from "./config";

const config = getConfig();

const providerConfig = {
    domain: config.domain,
    clientId: config.clientId,
    ...(config.audience ? { audience: config.audience } : null),
    redirectUri: "https://172.18.0.2:3000/dashboard",
};

ReactDOM.render(
    <StrictMode>
        <Auth0Provider {...providerConfig}
        >
            <App />
        </Auth0Provider>,
    </StrictMode>,
    document.getElementById("root")
);