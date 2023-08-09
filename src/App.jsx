import { useState } from 'react'
import reactLogo from './assets/react.svg'
import { Routes, Route, Outlet } from "react-router-dom"
import Home from './components/home'
import ParadasDoDia from './components/paradasDoDia'
import Login from './components/login'
import Cadastro from './components/cadastro'
import CadastroOnibus from './components/cadastroOnibus'
import CadastroParada from './components/cadastroParada'
import CheckIn from './components/checkin'
import MostrarPontos from './components/listaPontos'

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Home></Home>}>
          <Route index element={<ParadasDoDia/>}></Route>
          <Route path="/login" element={<Login/>}/>
          <Route path="aluno/cadastro" element={<Cadastro/>}/>
          <Route path="onibus/cadastro" element={<CadastroOnibus/>}/>
          <Route path="ponto/cadastro" element={<CadastroParada/>}/>
          <Route path="/checkin" element={<CheckIn/>}/>
          <Route path="/ponto/lista" element={<MostrarPontos/>}/>
        </Route>
      </Routes>
    </>
  )
}

export default App
