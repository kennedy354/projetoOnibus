import '/src/style/login.css';

function CadastroOnibus(){
    return(
    <div class="login-cadastro">
    <div class="formulario">
    <form class="formulario-registro">

      <div className='emVolta'>
        <label className='labelEmVolta'>Motorista</label>
        <input type="text" placeholder="Motorista"/>
      </div>

      <div className='emVolta'>
        <label className='labelEmVolta'>Placa</label>
        <input type="text" placeholder="Placa"/>
      </div>

      <div className='emVolta'>
        <label className='labelEmVolta'>Ano</label>
        <input type="text" placeholder="Ano"/>
      </div>

      <button>Criar</button>
    </form>
    </div>
    </div>
    )
}

export default CadastroOnibus