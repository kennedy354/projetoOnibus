import React, { useState, useEffect } from "react";
import "/src/style/tabela.css";

function ParadasDoDia() {
  const [pontosVaiHoje, setPontosVaiHoje] = useState([]);

  useEffect(() => {
    async function fetchPontosVaiHoje() {
      try {
        const response = await fetch("http://localhost:8080/vaiHoje");
        const data = await response.json();
        setPontosVaiHoje(data.pontosVaiHoje);
      } catch (error) {
        console.error("Erro", error);
      }
    }

    fetchPontosVaiHoje();
  }, []);

  return (
    <div className="mostrar-pontos-dia">
      <h2 className="Ttitulo">Paradas do Dia</h2>
      <table className="tabela">
        <thead>
          <tr>
            <th>Rua</th>
            <th>Bairro</th>
            <th>Ponto de Referência</th>
          </tr>
        </thead>
        <tbody>
          {pontosVaiHoje.map((ponto, index) => (
            <tr key={index}>
              <td>{ponto.rua}</td>
              <td>{ponto.bairro}</td>
              <td>{ponto.pontoReferencia}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ParadasDoDia;
