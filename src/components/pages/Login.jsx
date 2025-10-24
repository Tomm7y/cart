import { useState } from "react";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");
    setSuccess(false);

    // Validación básica
    if (!email || !password) {
      setError("Por favor, completa todos los campos.");
      return;
    }

    // Simulación de autenticación
    if (email === "admin@fast.cl" && password === "123456") {
      setSuccess(true);
      console.log("✅ Login exitoso:", { email });
    } else {
      setError("❌ Credenciales incorrectas.");
    }
  };

  return (
    <div>
      <h2>Iniciar sesión</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Correo electrónico"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          data-testid="email-input"
        />
        <input
          type="password"
          placeholder="Contraseña"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          data-testid="password-input"
        />
        <button type="submit" data-testid="submit-btn">
          Entrar
        </button>
      </form>

      {error && <p data-testid="error-msg">{error}</p>}
      {success && <p data-testid="success-msg">Inicio de sesión exitoso 🎉</p>}
    </div>
  );
}
