import { render, screen } from "@testing-library/react"
import Home from "./Home"
import React from "react"

describe('Home page', () => {

    it('muestra catalogo de productos', () => {
        render(<Home />)
        expect(screen.getByText("Oso de peluche patriarcal")).toBeInTheDocument()
        expect(screen.getByText("Oso grizzli")).toBeInTheDocument()
    })

})