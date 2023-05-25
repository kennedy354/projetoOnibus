import '/src/style/login.css';

function Login(){
    return(
        /*
        <>
            <div className="Logar">
            <div><h1>LOGIN</h1></div>
            <form>
                <div className="inputUSER">
                    <input type="text" placeholder="Usuário"></input>
                </div>
                <div className="inputPASS">
                    <input type="password" placeholder="Senha"></input>
                </div>
                <div className="butão">
                    <input type="submit" value="Entrar"></input>
                </div>
            </form>
            </div>
        </>
        */
       <>
        <div class="login-page">
        <div class="form">
            <form class="login-form">
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