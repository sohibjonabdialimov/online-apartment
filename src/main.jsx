import React from "react";
import ReactDOM from "react-dom/client";
import { DarkModeContextProvider } from "./context/darkModeContext";
import { AuthContextProvider } from "./context/AuthContext";
import App from "./App.jsx";
import "./index.css";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { MyOrderProvider } from "./services/providers/orderContext.jsx";
import { FurnituresProvider } from "./services/providers/furnitures.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <DarkModeContextProvider>
      <AuthContextProvider>
        <MyOrderProvider>
          <FurnituresProvider>
            <App />
          </FurnituresProvider>
        </MyOrderProvider>
      </AuthContextProvider>
    </DarkModeContextProvider>
  </React.StrictMode>
);
