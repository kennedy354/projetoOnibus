import React, { useState, useEffect } from "react";
import "/src/style/tabela.css";

function MostrarPontos() {
  const [pontos, setPontos] = useState([]);
  const [editingPontoId, setEditingPontoId] = useState(null);
  const [editedPonto, setEditedPonto] = useState({
    rua: "",
    bairro: "",
    pontoReferencia: "",
  });

  const handleDeletePonto = async (id) => {
    try {
      const response = await fetch(`http://localhost:8080/ponto/${id}`, {
        method: "DELETE",
      });

      if (response.status === 204) {
        const updatedPontos = pontos.filter((ponto) => ponto._id !== id);
        setPontos(updatedPontos);
      } else {
        const data = await response.json();
        alert(data.message);
      }
    } catch (error) {
      console.error("Erro", error);
    }
  };

  const handleEditPonto = (id) => {
    const pontoToEdit = pontos.find((ponto) => ponto._id === id);
    setEditingPontoId(id);
    setEditedPonto({
      rua: pontoToEdit.rua,
      bairro: pontoToEdit.bairro,
      pontoReferencia: pontoToEdit.pontoReferencia,
    });
  };

  const handleSaveEdit = async (id) => {
    try {
      const response = await fetch(`http://localhost:8080/ponto/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(editedPonto),
      });

      if (response.status === 200) {
        const updatedPontos = pontos.map((ponto) =>
          ponto._id === id ? { ...ponto, ...editedPonto } : ponto
        );
        setPontos(updatedPontos);
        setEditingPontoId(null);
      } else {
        console.error("Erro ao editar ponto");
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
      <h2 className="Ttitulo">Pontos Cadastrados</h2>
      <table className="tabela">
        <thead>
          <tr>
            <th>Rua</th>
            <th>Bairro</th>
            <th>P. referência</th>
            <th>Editar</th>
            <th>Deletar</th>
          </tr>
        </thead>
        <tbody>
          {pontos.map((ponto, index) => (
            <tr key={index}>
              <td>
                {editingPontoId === ponto._id ? (
                  <input
                    type="text"
                    value={editedPonto.rua}
                    onChange={(e) =>
                      setEditedPonto({ ...editedPonto, rua: e.target.value })
                    }
                  />
                ) : (
                  ponto.rua
                )}
              </td>
              <td>
                {editingPontoId === ponto._id ? (
                  <input
                    type="text"
                    value={editedPonto.bairro}
                    onChange={(e) =>
                      setEditedPonto({ ...editedPonto, bairro: e.target.value })
                    }
                  />
                ) : (
                  ponto.bairro
                )}
              </td>
              <td>
                {editingPontoId === ponto._id ? (
                  <input
                    type="text"
                    value={editedPonto.pontoReferencia}
                    onChange={(e) =>
                      setEditedPonto({
                        ...editedPonto,
                        pontoReferencia: e.target.value,
                      })
                    }
                  />
                ) : (
                  ponto.pontoReferencia
                )}
              </td>
              <td>
                {editingPontoId === ponto._id ? (
                  <button
                    onClick={() => handleSaveEdit(ponto._id)}
                    className="bSalvar"
                  >
                    Salvar
                  </button>
                ) : (
                  <button
                    onClick={() => handleEditPonto(ponto._id)}
                    className="bEditar"
                  >
                    Editar
                  </button>
                )}
              </td>
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
