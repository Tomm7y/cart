import { fireEvent, render, screen } from "@testing-library/react"
import Cart from "./Cart"
import React from "react"

describe('Cart page', () => {
    const mockProducts = [
        {
            code: "FR001",
            image: "http://example.com/imagen1.png",
            name: "Manzanas Fuji",
            description: "Manzanas Fuji crujientes y dulces, cultivadas en el Valle del Maule. Perfectas para meriendas saludables o como ingrediente en postres. Estas manzanas son conocidas por su textura firme y su sabor equilibrado entre dulce y ácido.",
            price: "$1200"
        },
        {
            code: "FR002",
            image: "http://example.com/imagen2.png",
            name: "Naranjas Valencia",
            description: "Jugosas y ricas en vitamina C, estas naranjas Valencia son ideales para zumos frescos y refrescantes. Cultivadas en condiciones climáticas óptimas que aseguran su dulzura y jugosidad.",
            price: "$1000"
        }
    ]
    Storage.prototype.getItem = jest.fn(() => JSON.stringify(mockProducts))
    Storage.prototype.clear = jest.fn()

    it('muestra productos desde localStorage', () => {
        render(<Cart />)
        expect(screen.getByText("Manzanas Fuji")).toBeInTheDocument()
        expect(screen.getByText("Naranjas Valencia")).toBeInTheDocument()
    })

    it('se llama a clear al presionar Vaciar carrito', () => {
        render(<Cart />)
        const button = screen.getByText("Vaciar carrito")
        fireEvent.click(button)
        expect(localStorage.clear).toHaveBeenCalled()
    })
})