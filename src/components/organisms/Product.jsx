import React from "react"

export default function Product(props) {
    const { code, image, name, description, price } = props

    function addToCart() {
        const products = JSON.parse(localStorage.getItem('products')) || []
        products.push(props)
        localStorage.setItem('products', JSON.stringify(products))
        console.log(products)
    }

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
