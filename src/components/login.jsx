import "/src/style/login.css";
import React, { useState } from "react";

function Login() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  const token = localStorage.getItem("token");

  const handleLogin = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch("http://localhost:8080/auth", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          senha,
        }),
      });

      if (response.ok) {
        const data = await response.json();
        const token = data.token;

        localStorage.setItem("token", token);
        alert(data.message);
        window.location.href = "/login";
      } else {
        const data = await response.json();
        alert(data.message);
      }
    } catch (error) {
      console.error("Erro", error);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    alert("Deslogado");
    window.location.href = "/login";
  };

  return (
    <>
      <div className="login-cadastro">
        <div className="formulario">
          <p className="titulo">Login</p>

          {!token ? (
            <form className="formulario-login" onSubmit={handleLogin}>
              <div className="emVolta">
                <label className="labelEmVolta">Email</label>
                <input
                  type="text"
                  placeholder="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              <div className="emVolta">
                <label className="labelEmVolta">Senha</label>
                <input
                  type="password"
                  placeholder="Senha"
                  value={senha}
                  onChange={(e) => setSenha(e.target.value)}
                />
              </div>
              <button type="submit">Entrar</button>
            </form>
          ) : (
            <button className="desLogar" type="button" onClick={handleLogout}>
              Sair
            </button>
          )}
        </div>
      </div>
    </>
  );
}
export default Login;
