import React, { useState, useEffect } from "react";
import "/src/style/tabela.css";

function MostrarPontos() {
  const [pontos, setPontos] = useState([]);

  const handleDeletePonto = async (id) => {
    try {
      const response = await fetch(`http://localhost:8080/ponto/${id}`, {
        method: "DELETE",
      });

      if (response.status === 204) {
        const updatedPontos = pontos.filter((ponto) => ponto._id !== id);
        setPontos(updatedPontos);
      } else {
        console.error("Erro ao deletar ponto");
      }
    } catch (error) {
      console.error("Erro", error);
    }
  };

  useEffect(() => {
    async function fetchPontos() {
      try {
        const response = await fetch("http://localhost:8080/ponto");
        const data = await response.json();
        setPontos(data);
      } catch (error) {
        console.error("Erro", error);
      }
    }

    fetchPontos();
  }, []);

  return (
    <div className="mostrar-pontos">
      <h2>Pontos Cadastrados</h2>
      <table className="tabela">
        <thead>
          <tr>
            <th>Rua</th>
            <th>Bairro</th>
            <th>Ponto de Referência</th>
            <th>Deletar</th>
          </tr>
        </thead>
        <tbody>
          {pontos.map((ponto, index) => (
            <tr key={index}>
              <td>{ponto.rua}</td>
              <td>{ponto.bairro}</td>
              <td>{ponto.pontoReferencia}</td>
              <td>
                <button
                  className="bExcluir"
                  onClick={() => handleDeletePonto(ponto._id)}
                >
                  X
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default MostrarPontos;
