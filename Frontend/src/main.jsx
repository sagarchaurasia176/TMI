import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { BrowserRouter } from "react-router-dom";
import ThemeContexts from "./context/ThemeContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(


<React.StrictMode>
    <BrowserRouter>
      <GoogleOAuthProvider clientId="553721851960-qjhp5u43eek6lcr8ffnsh4ri777kckii.apps.googleusercontent.com">

        <ThemeContexts>
          <App />
        </ThemeContexts>


      </GoogleOAuthProvider>

    </BrowserRouter>
  </React.StrictMode>
);
