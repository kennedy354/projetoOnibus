import React, { useState, useEffect } from "react";
import "/src/style/tabela.css";

function MostrarOnibus() {
  const [onibus, setOnibus] = useState([]);
  const [editingOnibusId, setEditingOnibusId] = useState(null);
  const [editedOnibus, setEditedOnibus] = useState({
    motorista: "",
    placa: "",
    ano: "",
  });

  const handleDeleteOnibus = async (id) => {
    try {
      const response = await fetch(`http://localhost:8080/onibus/${id}`, {
        method: "DELETE",
      });

      if (response.status === 204) {
        const updatedOnibus = onibus.filter((item) => item._id !== id);
        setOnibus(updatedOnibus);
      } else {
        console.error("Erro ao deletar ônibus");
      }
    } catch (error) {
      console.error("Erro", error);
    }
  };

  const handleEditOnibus = (id) => {
    const onibusToEdit = onibus.find((item) => item._id === id);
    setEditingOnibusId(id);
    setEditedOnibus({
      motorista: onibusToEdit.motorista,
      placa: onibusToEdit.placa,
      ano: onibusToEdit.ano,
    });
  };

  const handleSaveEdit = async (id) => {
    try {
      const response = await fetch(`http://localhost:8080/onibus/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(editedOnibus),
      });

      if (response.status === 200) {
        const updatedOnibus = onibus.map((item) =>
          item._id === id ? { ...item, ...editedOnibus } : item
        );
        setOnibus(updatedOnibus);
        setEditingOnibusId(null);
      } else {
        console.error("Erro ao editar ônibus");
      }
    } catch (error) {
      console.error("Erro", error);
    }
  };

  useEffect(() => {
    async function fetchOnibus() {
      try {
        const response = await fetch("http://localhost:8080/onibus");
        const data = await response.json();
        setOnibus(data);
      } catch (error) {
        console.error("Erro", error);
      }
    }

    fetchOnibus();
  }, []);

  return (
    <div className="mostrar-onibus">
      <h2 className="Ttitulo">Ônibus Cadastrados</h2>
      <table className="tabela">
        <thead>
          <tr>
            <th>Motorista</th>
            <th>Placa</th>
            <th>Ano</th>
            <th>Editar</th>
            <th>Deletar</th>
          </tr>
        </thead>
        <tbody>
          {onibus.map((item, index) => (
            <tr key={index}>
              <td>
                {editingOnibusId === item._id ? (
                  <input
                    type="text"
                    value={editedOnibus.motorista}
                    onChange={(e) =>
                      setEditedOnibus({
                        ...editedOnibus,
                        motorista: e.target.value,
                      })
                    }
                  />
                ) : (
                  item.motorista
                )}
              </td>
              <td>
                {editingOnibusId === item._id ? (
                  <input
                    type="text"
                    value={editedOnibus.placa}
                    onChange={(e) =>
                      setEditedOnibus({
                        ...editedOnibus,
                        placa: e.target.value,
                      })
                    }
                  />
                ) : (
                  item.placa
                )}
              </td>
              <td>
                {editingOnibusId === item._id ? (
                  <input
                    type="text"
                    value={editedOnibus.ano}
                    onChange={(e) =>
                      setEditedOnibus({ ...editedOnibus, ano: e.target.value })
                    }
                  />
                ) : (
                  item.ano
                )}
              </td>
              <td>
                {editingOnibusId === item._id ? (
                  <button
                    onClick={() => handleSaveEdit(item._id)}
                    className="bSalvar"
                  >
                    Salvar
                  </button>
                ) : (
                  <button
                    onClick={() => handleEditOnibus(item._id)}
                    className="bEditar"
                  >
                    Editar
                  </button>
                )}
              </td>
              <td>
                <button
                  className="bExcluir"
                  onClick={() => handleDeleteOnibus(item._id)}
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

export default MostrarOnibus;
