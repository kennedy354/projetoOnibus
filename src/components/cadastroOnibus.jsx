import "/src/style/login.css";
import React, { useState } from "react";

function CadastroOnibus() {
  const [motorista, setMotorista] = useState("");
  const [placa, setPlaca] = useState("");
  const [ano, setAno] = useState("");

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch("http://localhost:8080/onibus", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          motorista,
          placa,
          ano,
        }),
      });

      const data = await response.json();
      console.log(data.message);

      setMotorista("");
      setPlaca("");
      setAno("");
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div class="login-cadastro">
      <div class="formulario">
        <form class="formulario-registro" onSubmit={handleFormSubmit}>
          <div className="emVolta">
            <label className="labelEmVolta">Motorista</label>
            <input
              type="text"
              placeholder="Motorista"
              value={motorista}
              onChange={(e) => setMotorista(e.target.value)}
            />
          </div>

          <div className="emVolta">
            <label className="labelEmVolta">Placa</label>
            <input
              type="text"
              placeholder="Placa"
              value={placa}
              onChange={(e) => setPlaca(e.target.value)}
            />
          </div>

          <div className="emVolta">
            <label className="labelEmVolta">Ano</label>
            <input
              type="text"
              placeholder="Ano"
              value={ano}
              onChange={(e) => setAno(e.target.value)}
            />
          </div>

          <button>Criar</button>
        </form>
      </div>
    </div>
  );
}

export default CadastroOnibus;
