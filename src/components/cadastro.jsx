import '/src/style/login.css';

function Cadastro(){
    return(
    <div class="login-cadastro">
    <div class="formulario">
    <form class="formulario-registro">

      <div className='emVolta'>
        <label className='labelEmVolta'>Nome</label>
        <input type="text" placeholder="Nome"/>
      </div>

      <div className='emVolta'>
        <label className='labelEmVolta'>Senha</label>
        <input type="password" placeholder="Senha"/>
      </div>

      <div className='emVolta'>
        <label className='labelEmVolta'>Email</label>
        <input type="text" placeholder="Email"/>
      </div>

      <div className='emVolta'>
        <label className='labelEmVolta'>CPF</label>
        <input type="text" placeholder="CPF"/>
      </div>
      
      <div className='emVolta'>
        <label className='labelEmVolta'>Data de Nascimento</label>
        <input type="date" placeholder="Data de Nascimento"/>
      </div>
      
      <div className='emVolta'>
        <label className='labelEmVolta'>Telefone</label>
        <input type="text" placeholder="Telefone"/>
      </div>

      <div className='escolhasDIV'>
      <label className='escolhasTitulo' for="listaParadas">Parada-</label>
      <select name="listaParadas" className='escolhasMenu'>
        <option value="Parada 1">Parada 1</option>
        <option value="Parada 2">Parada 2</option>
      </select>
      </div>

      <div className='escolhasDIV'>
      <label className='escolhasTitulo' for="listaOnibus">Ônibus-</label>
      <select name="listaOnibus" className='escolhasMenu'>
        <option value="Onibus 1">Ônibus Manhã</option>
        <option value="Onibus 2">Ônibus Noite</option>
      </select>
      </div>
      
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