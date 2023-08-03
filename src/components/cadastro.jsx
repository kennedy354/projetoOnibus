import "/src/style/login.css";
import React, { useState } from "react";

function Cadastro() {
  const [nome, setNome] = useState("");
  const [senha, setSenha] = useState("");
  const [email, setEmail] = useState("");
  const [cpf, setCpf] = useState("");
  const [dataNascimento, setDataNascimento] = useState("");
  const [telefone, setTelefone] = useState("");
  const [adm, setAdm] = useState(false);
  const [ponto, setPonto] = useState("");
  const [onibus, setOnibus] = useState("");

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch("http://localhost:8080/aluno", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          nome,
          senha,
          email,
          cpf,
          dataNascimento,
          telefone,
          adm,
          ponto,
          onibus,
        }),
      });

      const data = await response.json();
      console.log(data.message);

      setNome("");
      setSenha("");
      setEmail("");
      setCpf("");
      setDataNascimento("");
      setTelefone("");
      setAdm("");
      setPonto("");
      setOnibus("");
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div class="login-cadastro">
      <div class="formulario">
        <form class="formulario-registro" onSubmit={handleFormSubmit}>
          <div className="emVolta">
            <label className="labelEmVolta">Nome</label>
            <input
              type="text"
              placeholder="Nome"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
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

          <div className="emVolta">
            <label className="labelEmVolta">Email</label>
            <input
              type="text"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="emVolta">
            <label className="labelEmVolta">CPF</label>
            <input
              type="text"
              placeholder="CPF"
              value={cpf}
              onChange={(e) => setCpf(e.target.value)}
            />
          </div>

          <div className="emVolta">
            <label className="labelEmVolta">Data de Nascimento</label>
            <input
              type="date"
              placeholder="Data de Nascimento"
              value={dataNascimento}
              onChange={(e) => setDataNascimento(e.target.value)}
            />
          </div>

          <div className="emVolta">
            <label className="labelEmVolta">Telefone</label>
            <input
              type="text"
              placeholder="Telefone"
              value={telefone}
              onChange={(e) => setTelefone(e.target.value)}
            />
          </div>

          <div className="emVolta">
            <label className="labelEmVolta">Ponto</label>
            <input
              type="text"
              placeholder="ID do Ponto"
              value={ponto}
              onChange={(e) => setPonto(e.target.value)}
            />
          </div>

          <div className="emVolta">
            <label className="labelEmVolta">Ônibus</label>
            <input
              type="text"
              placeholder="ID do Ônibus"
              value={onibus}
              onChange={(e) => setOnibus(e.target.value)}
            />
          </div>

          <fieldset className="adm">
            <legend>Usuario é ADM</legend>
            <input
              type="radio"
              id="tipo-User"
              name="tipo"
              value="true"
              className="tipoInput"
              checked={adm === true}
              onChange={() => setAdm(true)}
            ></input>
            <label for="tipo-User" className="label-tipo">
              Sim
            </label>
            <input
              type="radio"
              id="tipo-User"
              name="tipo"
              value="false"
              className="tipoInput"
              checked={adm === false}
              onChange={() => setAdm(false)}
            ></input>
            <label for="tipo-User" className="label-tipo">
              Não
            </label>
          </fieldset>

          <button>Criar</button>
        </form>
      </div>
    </div>
  );
}

export default Cadastro;
