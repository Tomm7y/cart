import { render, screen } from "@testing-library/react"
import Home from "./Home"
import React from "react"

describe('Home page', () => {

    it('muestra catalogo de productos', () => {
        render(<Home />)
        expect(screen.getByText("Manzanas Fuji")).toBeInTheDocument()
        expect(screen.getByText("Naranjas Valencia")).toBeInTheDocument()
    })

})