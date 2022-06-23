import React from "react";
import ReactDOM from "react-dom/client";
import App from "./app";
import { AppProvider } from "./context/appContext";
import "./index.css";

const Realtor = () => {
  return (
    <AppProvider>
      <App />
    </AppProvider>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Realtor />);
