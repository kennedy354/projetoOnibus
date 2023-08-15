import "/src/style/login.css";
import React, { useState } from "react";
import InputMask from "react-input-mask";

function CadastroOnibus() {
  const [motorista, setMotorista] = useState("");
  const [placa, setPlaca] = useState("");
  const [ano, setAno] = useState("");

  const token = localStorage.getItem("token");

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch("http://localhost:8080/onibus", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          motorista,
          placa,
          ano,
        }),
      });

      const data = await response.json();
      alert(data.message);

      setMotorista("");
      setPlaca("");
      setAno("");
    } catch (error) {
      console.error("Erro", error);
    }
  };

  return (
    <div className="login-cadastro">
      <div className="formulario">
        <p className="titulo">Cadastro Ônibus</p>
        <form className="formulario-registro" onSubmit={handleFormSubmit}>
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
            <InputMask
              mask="aaa9a99"
              placeholder="AAA0A00"
              value={placa}
              onChange={(e) => setPlaca(e.target.value)}
            />
          </div>

          <div className="emVolta">
            <label className="labelEmVolta">Ano</label>
            <InputMask
              mask="9999"
              placeholder="20XX"
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
