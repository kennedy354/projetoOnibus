import '/src/style/barra.css';
import { Link,Outlet } from "react-router-dom"

function Barra() {
    return (
    <div className="nav">
        <p><Link to="/">Home</Link></p>
        <p><Link to="/login">Login</Link></p>
        <p><Link to="aluno/cadastro">Cadastro Usuário</Link></p>
        <p><Link to="onibus/cadastro">Cadastro Ônibus</Link></p>
        <p><Link to="onibus/lista">Lista de Ônibus</Link></p>
        <p><Link to="ponto/cadastro">Cadastro Ponto</Link></p>
        <p><Link to="ponto/lista">Lista de Pontos</Link></p>
        <p><Link to="/checkin">Checkin</Link></p>
    </div>
    )
}
export default Barra;