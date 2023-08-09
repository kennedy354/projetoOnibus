import "/src/style/login.css";

function Login() {
  return (
    <>
      <div className="login-cadastro">
        <div className="formulario">
          <p className="titulo">Login</p>
          <form className="formulario-login">
            <div className="emVolta">
              <label className="labelEmVolta">Nome</label>
              <input type="text" placeholder="Nome" />
            </div>

            <div className="emVolta">
              <label className="labelEmVolta">Senha</label>
              <input type="password" placeholder="Senha" />
            </div>
            <button>Entrar</button>
          </form>
        </div>
      </div>
    </>
  );
}
export default Login;
