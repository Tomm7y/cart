import { fireEvent, render, screen } from "@testing-library/react"
import Product from "./Product"
import React from "react"

beforeEach(()=>{
    Storage.prototype.getItem = jest.fn(()=>"[]")
    Storage.prototype.setItem = jest.fn()
})

describe('Product component', ()=>{
    const mockProduct = {
        code: "FR001",
        image: "http://example.com/imagen1.png",
        name: "Manzanas Fuji",
        description: "Manzanas Fuji crujientes y dulces, cultivadas en el Valle del Maule. Perfectas para meriendas saludables o como ingrediente en postres. Estas manzanas son conocidas por su textura firme y su sabor equilibrado entre dulce y ácido.",
        price: "$1200"
    }

    it('renderiza los datos correctamente', ()=>{
        render(<Product {...mockProduct}/>)
        expect(screen.getByText("Manzanas Fuji")).toBeInTheDocument()
        expect(screen.getByText("Manzanas Fuji crujientes y dulces, cultivadas en el Valle del Maule. Perfectas para meriendas saludables o como ingrediente en postres. Estas manzanas son conocidas por su textura firme y su sabor equilibrado entre dulce y ácido.")).toBeInTheDocument()
        expect(screen.getByText("$1200")).toBeInTheDocument()
    })

    it('se llama a addTocart', ()=>{
        render(<Product {...mockProduct}/>)
        const button = screen.getByText("Añadir al carro")
        fireEvent.click(button)
        expect(localStorage.setItem).toHaveBeenCalled()
    })
})