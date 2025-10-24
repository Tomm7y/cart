import { fireEvent, render, screen } from "@testing-library/react"
import Product from "./Product"
import React from "react"

beforeEach(()=>{
    Storage.prototype.getItem = jest.fn(()=>"[]")
    Storage.prototype.setItem = jest.fn()
})

describe('Product component', ()=>{
    const mockProduct = {
        code: "1",
        image: "http://example.com/imagen1.png",
        name: "Oso patriarcal",
        description: "Un oso hetero machista",
        price: "19990"
    }

    it('renderiza los datos correctamente', ()=>{
        render(<Product {...mockProduct}/>)
        expect(screen.getByText("Oso patriarcal")).toBeInTheDocument()
        expect(screen.getByText("Un oso hetero machista")).toBeInTheDocument()
        expect(screen.getByText("19990")).toBeInTheDocument()
    })

    it('se llama a addTocart', ()=>{
        render(<Product {...mockProduct}/>)
        const button = screen.getByText("Añadir al carro")
        fireEvent.click(button)
        expect(localStorage.setItem).toHaveBeenCalled()
    })
})