import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { Auth0Provider } from "@auth0/auth0-react";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Auth0Provider
     domain="dev-rmrfnq2ktcfpk44j.us.auth0.com"
     clientId="sjl3JoYLaGkYAsjc9l5TY22N4KsW6S78"
     authorizationParams={{
      redirect_uri: "https://urban-nest-beta.vercel.app/"
     }}
     audience="http://localhost:8000"
     scope="openid profile email"
    >
      <App />
    </Auth0Provider>
  </React.StrictMode>
);
