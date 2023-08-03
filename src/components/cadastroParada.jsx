import React, { useState } from "react";

function CadastroParada() {
  const [rua, setRua] = useState("");
  const [bairro, setBairro] = useState("");
  const [pontoReferencia, setPontoReferencia] = useState("");

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch("http://localhost:8080/ponto", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          rua,
          bairro,
          pontoReferencia,
        }),
      });

      const data = await response.json();
      console.log(data.message);

      setRua("");
      setBairro("");
      setPontoReferencia("");
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="login-cadastro">
      <div className="formulario">
        <form className="formulario-registro" onSubmit={handleFormSubmit}>
          <div className="emVolta">
            <label className="labelEmVolta">Rua</label>
            <input
              type="text"
              placeholder="Rua"
              value={rua}
              onChange={(e) => setRua(e.target.value)}
            />
          </div>

          <div className="emVolta">
            <label className="labelEmVolta">Bairro</label>
            <input
              type="text"
              placeholder="Bairro"
              value={bairro}
              onChange={(e) => setBairro(e.target.value)}
            />
          </div>

          <div className="emVolta">
            <label className="labelEmVolta">Ponto de Referência</label>
            <input
              type="text"
              placeholder="Ponto"
              value={pontoReferencia}
              onChange={(e) => setPontoReferencia(e.target.value)}
            />
          </div>

          <button type="submit">Criar</button>
        </form>
      </div>
    </div>
  );
}

export default CadastroParada;
