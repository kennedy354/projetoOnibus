import '/src/style/login.css';

function Login(){
    return(
       <>
        <div class="login-cadastro">
        <div class="formulario">
            <form class="formulario-login">
            <div className='emVolta'>
                <label className='labelEmVolta'>Nome</label>
                <input type="text" placeholder="Nome"/>
            </div>

            <div className='emVolta'>
                <label className='labelEmVolta'>Senha</label>
                <input type="password" placeholder="Senha"/>
            </div>
            <button>Entrar</button>
            </form>
        </div>
        </div>
       </>
    )
}
export default Login;