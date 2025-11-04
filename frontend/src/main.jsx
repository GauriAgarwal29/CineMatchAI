import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { AppProvider } from "./context/AppContext.jsx"; // ✅ import provider
import "./styles/global.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AppProvider>      {/* ✅ Wrap your app */}
      <App />
    </AppProvider>
  </React.StrictMode>
);
