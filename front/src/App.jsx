import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes } from "react-router-dom";

import Navbar  from "./components/Navbar";
import Home  from "./pages/Home";
import Registro  from "./pages/Registro";
import LoginPage  from "./pages/LoginPage";
import Profile  from "./pages/Profile";
import { Cart }  from "./pages/Cart";
import Pizza from "./pages/Pizza";
import NotFound  from "./components/NotFound";
import Footer  from "./components/Footer";
import CartProvider from "./context/CartContext";



function App() {
  return (
    <>
    <CartProvider>
    <Navbar />
      <Routes>      
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Registro />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/pizza/p001" element={<Pizza />} />             
        <Route path="/404" element={<NotFound />} />
        <Route path="*" element={<NotFound />} />           
      </Routes>
      <Footer />
      </CartProvider>
    </>
  );
}

export default App;
