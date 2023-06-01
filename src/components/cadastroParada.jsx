function CadastroParada(){
    return(
        <div class="login-cadastro">
        <div class="formulario">
        <form class="formulario-registro">
    
          <div className='emVolta'>
            <label className='labelEmVolta'>Rua</label>
            <input type="text" placeholder="Rua"/>
          </div>
    
          <div className='emVolta'>
            <label className='labelEmVolta'>Bairro</label>
            <input type="text" placeholder="Bairro"/>
          </div>
    
          <div className='emVolta'>
            <label className='labelEmVolta'>Ponto de Referência</label>
            <input type="text" placeholder="Ponto"/>
          </div>
    
          <button>Criar</button>
        </form>
        </div>
        </div>
    )
}

export default CadastroParada