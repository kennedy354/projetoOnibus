import '/src/style/login.css';

function Cadastro(){
    return(
    <div class="login-cadastro">
    <div class="formulario">
    <form class="formulario-registro">
      <input type="text" placeholder="Nome"/>
      <input type="password" placeholder="Senha"/>
      <input type="text" placeholder="Email"/>
      <input type="text" placeholder="CPF"/>
      <input type="text" placeholder="Data de Nascimento"/>
      <input type="text" placeholder="Telefone"/>
      
      <fieldset className='adm'>
        <legend>Usuario é ADM</legend>
        <input type="radio" id="tipo-User" name='tipo' value="true" className='tipoInput'></input>
        <label for="tipo-User" className='label-tipo'>Sim</label>
        <input type="radio" id="tipo-User" name='tipo' value="false" className='tipoInput'></input>
        <label for="tipo-User" className='label-tipo'>Não</label>
      </fieldset>

      <button>Criar</button>
    </form>
    </div>
    </div>
    )
}

export default Cadastro