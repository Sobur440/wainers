import { Routes, Route } from "react-router-dom";
import { useState, createContext } from "react";
import Home from "./pages/Home.jsx";
import Shop from "./pages/Shop.jsx";
import NavBar from "./components/NavBar.jsx";
import Product from "./pages/Product.jsx";
import NotFound from "./pages/NotFound.jsx";
import Cart from "./pages/Cart.jsx";
import User from "./pages/User.jsx";

export const CartContext = createContext();

function App() {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (item) => {
    setCartItems((i) => [...i, item]);
  };

  const deleteCartItem = (index) => {
    setCartItems((items) => items.filter((_, i) => i !== index));
  };

  // console.log(cartItems);

  return (
    <>
      <CartContext.Provider value={{ cartItems, addToCart, deleteCartItem }}>
        <NavBar />
        <br /> <br /> <br />
        <br />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="shop">
            <Route index element={<Shop />} />
            <Route path=":name" element={<Product />} />
          </Route>
          <Route path="cart" element={<Cart />} />
          <Route path="user" element={<User />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </CartContext.Provider>
    </>
  );
}

export default App;
