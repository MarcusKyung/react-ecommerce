import React, { useState } from "react";
import Cart from "../Components/Cart";
import NavBar from "../Components/NavBar";
import ProductTable from "../Components/ProductTable";

function Home() {
  const [open, setOpen] = useState(false);
  const [cart, updateCart] = useState(localStorage.getItem("cart") ? JSON.parse(localStorage.getItem("cart")) : (localStorage.setItem("cart", JSON.stringify([]))));

  React.useEffect(()=> {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  return (
    <main>
      <NavBar {...{ setOpen, cart }} />
      <Cart {...{ open, setOpen, cart, updateCart }} />
      <ProductTable {...{ cart, updateCart }} />
    </main>
  );
}

export default Home;
