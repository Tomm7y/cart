import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const location = useLocation();
  const [cartCount, setCartCount] = useState(0);

  const updateCartCount = () => {
    const products = JSON.parse(localStorage.getItem("products")) || [];
    setCartCount(products.length);
  };

  useEffect(() => {
    updateCartCount();
    // Escuchar eventos de actualización del carrito
    window.addEventListener("cartUpdated", updateCartCount);
    // Escuchar cambios de almacenamiento entre pestañas
    window.addEventListener("storage", updateCartCount);

    return () => {
      window.removeEventListener("cartUpdated", updateCartCount);
      window.removeEventListener("storage", updateCartCount);
    };
  }, []);

  const linkStyle = (path) =>
    `px-4 py-2 rounded-lg transition ${
      location.pathname === path
        ? "bg-blue-700 text-white"
        : "bg-blue-500 text-white hover:bg-blue-600"
    }`;

  return (
    <nav className="bg-blue-600 text-white p-4 flex justify-between items-center shadow-md">
      <h1 className="text-xl font-bold">FAST Store</h1>
      <div className="flex items-center space-x-3">
        <Link to="/" className={linkStyle("/")}>
          Inicio
        </Link>

        <Link
          to="/cart"
          className="relative flex items-center space-x-1 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg transition"
        >
          <span role="img" aria-label="cart">🛒</span>
          <span>Carrito</span>
          {cartCount > 0 && (
            <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs rounded-full px-1.5">
              {cartCount}
            </span>
          )}
        </Link>

        <Link to="/login" className={linkStyle("/login")}>
          Login
        </Link>
      </div>
    </nav>
  );
}