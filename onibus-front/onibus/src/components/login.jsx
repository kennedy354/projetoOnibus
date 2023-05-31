import '/src/style/login.css';

function Login(){
    return(
       <>
        <div class="login-cadastro">
        <div class="formulario">
            <form class="formulario-login">
            <input type="text" placeholder="Nome"/>
            <input type="password" placeholder="Senha"/>
            <button>Entrar</button>
            </form>
        </div>
        </div>
       </>
    )
}
export default Login;