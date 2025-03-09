// src/index.js
import React from "react";
import ReactDOM from "react-dom/client"; // Updated for React 18+
import "./index.css";
import App from "./App";
import { AuthProvider } from "./context/AuthContext";
import { Provider } from "react-redux";
import { store } from "./redux/store";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <Provider store={store}>
    <AuthProvider>
      <App />
    </AuthProvider>
  </Provider>
);
