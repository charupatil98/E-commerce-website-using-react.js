import "./App.css";
import Navbar from "./components/Navbar";
import Product from "./components/Product";
import Productdata from "./components/Productdata";
import Searchitem from "./components/Searchitem";
import Cart from "./components/Cart";
import Shop from "./components/Shop";
import { items } from "./components/Data";
import {
  BrowserRouter,
  Router,
  Routes,
  Route,
  Links,
  Link,
  data,
} from "react-router-dom";
import { useState } from "react";
function App() {
  const [data, setdata] = useState([...items]);
  const [cart, setcart] = useState([]);
  return (
    <>
      <BrowserRouter>
        <Navbar setdata={setdata} cart={cart} />
        <Routes>
        <Route path="/" element={<Product items={data} cart={cart}
      setcart={setcart}/>}/>
          <Route path="/product/:id" element={<Productdata />} />
          <Route path="/cartinfo" element={<Cart cart={cart} />} />
          <Route path="/search/:term" element={<Searchitem />} />
          <Route path="/shop" element={<Shop />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
