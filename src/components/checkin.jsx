import React, { useState } from "react";
import InputMask from "react-input-mask";

function CheckIn() {
  const [alunoId, setAlunoId] = useState("");

  const handleCheckInSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch(
        `http://localhost:8080/aluno/${alunoId}/checkIn`,
        {
          method: "PUT",
        }
      );

      if (response.ok) {
        const data = await response.json();
        alert(data.message);
      } else {
        const data = await response.json();
        alert(`Erro: ${data.message}`);
      }

      setAlunoId("");
    } catch (error) {
      console.error("Erro", error);
    }
  };

  return (
    <div className="login-cadastro">
      <div className="formulario">
        <p className="titulo">Check-In</p>
        <form className="formulario-registro" onSubmit={handleCheckInSubmit}>
          <div className="emVolta">
            <label className="labelEmVolta">ID do Aluno</label>
            <input
              type="text"
              placeholder="ID do Aluno"
              value={alunoId}
              onChange={(e) => setAlunoId(e.target.value)}
            />
          </div>

          <button>Check-In</button>
        </form>
      </div>
    </div>
  );
}

export default CheckIn;
