import React from 'react'
import Product from '../organisms/Product'

export default function Home() {
    return (
        <div id="products">
            <Product 
                code="1" 
                image="https://pronobel.cl/cdn/shop/files/p-125119-1-b0a0e9c2-a525-4e57-88f8-ad72ad34e307_5000x.jpg"
                name="Oso de peluche patriarcal"
                description="Osito blanco sis genero"
                price="29990"/>
            <Product 
                code="2" 
                image="https://buildabear.cl/cdn/shop/files/27633_9e54d773-09e0-4297-8bea-1433c320dce2.jpg"
                name="Oso grizzli"
                description="Oso color amarillo hetero"
                price="21990"/>
        </div>
    )
}
