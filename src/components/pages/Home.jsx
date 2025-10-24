import React from 'react'
import Product from '../organisms/Product'

export default function Home() {
  return (
    <div id="products" className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      <Product
        code="FR001"
        image="https://png.pngtree.com/background/20220723/original/pngtree-fuji-apple-hd-fruit-photography-picture-image_1735822.jpg"
        name="Manzanas Fuji"
        description="Manzanas Fuji crujientes y dulces, cultivadas en el Valle del Maule. Perfectas para meriendas saludables o como ingrediente en postres. Estas manzanas son conocidas por su textura firme y su sabor equilibrado entre dulce y ácido."
        price="$1200"
      />
      <Product
        code="FR002"
        image="https://citrofrut.com/noticias/wp-content/uploads/2023/02/shutterstock_173674910-scaled.jpg"
        name="Naranjas Valencia"
        description="Jugosas y ricas en vitamina C, estas naranjas Valencia son ideales para zumos frescos y refrescantes. Cultivadas en condiciones climáticas óptimas que aseguran su dulzura y jugosidad."
        price="$1000"
      />
    </div>
  )
}

