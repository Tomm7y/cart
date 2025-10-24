import React from "react";

export default function Product({ code, image, name, description, price }) {
  const addToCart = () => {
    const current = JSON.parse(localStorage.getItem("products")) || [];

    const newProduct = { code, image, name, description, price };
    const updated = [...current, newProduct];
    localStorage.setItem("products", JSON.stringify(updated));

    window.dispatchEvent(new Event("cartUpdated"));
  };

    return (
        <>
            <div className="product">
                <div className="product-image" style={{ backgroundImage: `url(${image})` }}></div>
                <div className="product-name">{name}</div>
                <div className="product-description">{description}</div>
                <div className="product-price">{price}</div>
                <button onClick={() => addToCart()}>Añadir al carro</button>
            </div>
        </>

    )
}
