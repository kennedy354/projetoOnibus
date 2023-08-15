import React, { useState } from "react";
import InputMask from "react-input-mask";

function CheckIn() {
  const alunoId = 1;

  const token = localStorage.getItem("token");

  if (!token) {
    window.location.href = "/login";
    alert("Precisa estar logado");
    return;
  }

  const handleCheckInSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch(
        `http://localhost:8080/aluno/${alunoId}/checkIn`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (response.ok) {
        const data = await response.json();
        alert(data.message);
      } else {
        const data = await response.json();
        alert(`Erro: ${data.message}`);
      }
    } catch (error) {
      console.error("Erro", error);
    }
  };

  return (
    <div className="login-cadastro">
      <div className="formulario">
        <p className="titulo">Check-In</p>
        <form className="formulario-registro" onSubmit={handleCheckInSubmit}>
          <button>Check-In</button>
        </form>
      </div>
    </div>
  );
}

export default CheckIn;
