import "/src/style/login.css";
import React, { useState, useEffect } from "react";

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

  const [onibusList, setOnibusList] = useState([]);

  useEffect(() => {
    fetchOnibus();
  }, []);

  const fetchOnibus = async () => {
    try {
      const response = await fetch("http://localhost:8080/onibus");
      const data = await response.json();
      setOnibusList(data);
    } catch (error) {
      console.error("Erro", error);
    }
  };

  const [pontosList, setPontosList] = useState([]);

  useEffect(() => {
    fetchPontos();
  }, []);

  const fetchPontos = async () => {
    try {
      const response = await fetch("http://localhost:8080/ponto");
      const data = await response.json();
      setPontosList(data);
    } catch (error) {
      console.error("Erro", error);
    }
  };

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
      alert(data.message);

      setNome("");
      setSenha("");
      setEmail("");
      setCpf("");
      setDataNascimento("");
      setTelefone("");
      setAdm(false);
      setPonto("");
      setOnibus("");
    } catch (error) {
      console.error("Erro", error);
    }
  };

  return (
    <div className="login-cadastro">
      <div className="formulario">
        <p className="titulo">Cadastro Usuário</p>
        <form className="formulario-registro" onSubmit={handleFormSubmit}>
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

          <div>
            <select
              className="escolhasMenu"
              value={ponto}
              onChange={(e) => setPonto(e.target.value)}
            >
              <option value="">Escolha um Ponto</option>
              {pontosList.map((ponto) => (
                <option key={ponto._id} value={ponto._id}>
                  {ponto.pontoReferencia}
                </option>
              ))}
            </select>
          </div>

          <div>
            <select
              className="escolhasMenu"
              value={onibus}
              onChange={(e) => setOnibus(e.target.value)}
            >
              <option value="">Escolha um Ônibus</option>
              {onibusList.map((onibus) => (
                <option key={onibus._id} value={onibus._id}>
                  {onibus.motorista}
                </option>
              ))}
            </select>
          </div>

          <fieldset className="adm">
            <legend>Usuario é ADM</legend>
            <input
              type="radio"
              id="tipo-User-true"
              name="tipo"
              value="true"
              className="tipoInput"
              checked={adm === true}
              onChange={() => setAdm(true)}
            />
            <label htmlFor="tipo-User-true" className="label-tipo">
              Sim
            </label>
            <input
              type="radio"
              id="tipo-User-false"
              name="tipo"
              value="false"
              className="tipoInput"
              checked={adm === false}
              onChange={() => setAdm(false)}
            />
            <label htmlFor="tipo-User-false" className="label-tipo">
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
