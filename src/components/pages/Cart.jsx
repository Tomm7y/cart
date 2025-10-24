import React, { useState, useEffect } from "react";

export default function Cart() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("products")) || [];
    setProducts(stored);
  }, []);

  // ✅ Actualiza localStorage y emite el evento global de actualización
  const updateCart = (newProducts) => {
    localStorage.setItem("products", JSON.stringify(newProducts));
    setProducts(newProducts);
    window.dispatchEvent(new Event("cartUpdated"));
  };

  // 🗑️ Eliminar un producto específico
  const removeProduct = (code) => {
    const updated = products.filter((p) => p.code !== code);
    updateCart(updated);
  };

  // ❌ Vaciar todo el carrito
  const clearCart = () => {
    localStorage.removeItem("products");
    setProducts([]);
    window.dispatchEvent(new Event("cartUpdated"));
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Carrito de compras</h2>

      {products.length === 0 ? (
        <p className="text-gray-600">Tu carrito está vacío 🛒</p>
      ) : (
        <>
          <table className="w-full border-collapse mb-4">
            <thead>
              <tr className="bg-gray-200 text-left">
                <th className="p-2">Código</th>
                <th className="p-2">Imagen</th>
                <th className="p-2">Nombre</th>
                <th className="p-2">Descripción</th>
                <th className="p-2">Precio</th>
                <th className="p-2">Acción</th>
              </tr>
            </thead>
            <tbody>
              {products.map((p) => (
                <tr key={p.code} className="border-b">
                  <td className="p-2">{p.code}</td>
                  <td className="p-2">
                    <img src={p.image} alt={p.name} className="w-16 h-16 object-cover rounded" />
                  </td>
                  <td className="p-2">{p.name}</td>
                  <td className="p-2">{p.description}</td>
                  <td className="p-2">${p.price}</td>
                  <td className="p-2">
                    <button
                      onClick={() => removeProduct(p.code)}
                      className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 transition"
                    >
                      Eliminar
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          <button
            onClick={clearCart}
            className="bg-gray-800 text-white px-4 py-2 rounded-lg hover:bg-gray-900 transition"
          >
            Vaciar carrito
          </button>
        </>
      )}
    </div>
  );
}
