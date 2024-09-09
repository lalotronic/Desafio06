import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx"; 
import "./index.css"; 
import { BrowserRouter } from "react-router-dom";
import CartProvider from './context/CartContext.jsx';
import ProductProvider from './context/ProductContext.jsx';

import "bootstrap/dist/css/bootstrap.min.css";

ReactDOM.createRoot(document.getElementById("root")).render(
    <BrowserRouter>
    <ProductProvider>
      <CartProvider>
        <App />
      </CartProvider>
    </ProductProvider>
  </BrowserRouter>
);