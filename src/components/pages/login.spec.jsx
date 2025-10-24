/*aqui iran las pruebas del login*/
import { render, screen, fireEvent } from "@testing-library/react";
import LoginPage from "./Login";

describe("LoginPage", () => {
  test("muestra mensaje de error si los campos están vacíos", () => {
    render(<LoginPage />);

    const submitButton = screen.getByTestId("submit-btn");
    fireEvent.click(submitButton);

    const errorMessage = screen.getByTestId("error-msg");
    expect(errorMessage).toHaveTextContent("Por favor, completa todos los campos.");
  });

  test("inicia sesión correctamente con credenciales válidas", () => {
    render(<LoginPage />);

    fireEvent.change(screen.getByTestId("email-input"), {
      target: { value: "admin@fast.cl" },
    });
    fireEvent.change(screen.getByTestId("password-input"), {
      target: { value: "123456" },
    });

    const submitButton = screen.getByTestId("submit-btn");
    fireEvent.click(submitButton);

    const successMessage = screen.getByTestId("success-msg");
    expect(successMessage).toHaveTextContent("Inicio de sesión exitoso");
  });
});
