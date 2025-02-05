import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import "./index.css";
import store from "./redux/store";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import App from "./App";
import { ParallaxProvider } from 'react-scroll-parallax';

const root = createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <ParallaxProvider>
    <Provider store={store}>
      <BrowserRouter>
        <ToastContainer />
        <App />
      </BrowserRouter>
    </Provider>
    </ParallaxProvider>
  </React.StrictMode>
);
