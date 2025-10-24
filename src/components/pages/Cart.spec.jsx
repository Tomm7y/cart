import { fireEvent, render, screen } from "@testing-library/react"
import Cart from "./Cart"
import React from "react"

describe('Cart page', () => {
    const mockProducts = [
        {
            code: "1",
            image: "http://example.com/imagen1.png",
            name: "Oso patriarcal",
            description: "Un oso hetero machista",
            price: "19990"
        },
        {
            code: "2",
            image: "http://example.com/imagen2.png",
            name: "Oso africano",
            description: "Un oso XXXXXL",
            price: "5990"
        }
    ]
    Storage.prototype.getItem = jest.fn(() => JSON.stringify(mockProducts))
    Storage.prototype.clear = jest.fn()

    it('muestra productos desde localStorage', () => {
        render(<Cart />)
        expect(screen.getByText("Oso patriarcal")).toBeInTheDocument()
        expect(screen.getByText("Oso africano")).toBeInTheDocument()
    })

    it('se llama a clear al presionar Limpiar', () => {
        render(<Cart />)
        const button = screen.getByText("Limpiar carrito")
        fireEvent.click(button)
        expect(localStorage.clear).toHaveBeenCalled()
    })
})