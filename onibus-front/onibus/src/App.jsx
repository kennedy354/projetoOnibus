import { useState } from 'react'
import reactLogo from './assets/react.svg'
import { Routes, Route, Outlet } from "react-router-dom"
import Home from './components/home'
import ParadasDoDia from './components/paradasDoDia'
import Login from './components/login'

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Home></Home>}>
          <Route index element={<ParadasDoDia/>}></Route>
          <Route path="/login" element={<Login/>}/>
        </Route>
      </Routes>
    </>
  )
}

export default App
