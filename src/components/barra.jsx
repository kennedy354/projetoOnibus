import '/src/style/barra.css';
import { Link,Outlet } from "react-router-dom"

function Barra() {
    return (
    <div className="nav">
        <p><Link to="/">Home</Link></p>
        <p><Link to="/login">Login</Link></p>
        <p><Link to="/cadastro/usuario">Cadastro Usuário</Link></p>
        <p><Link to="/cadastro/onibus">Cadastro Ônibus</Link></p>
        <p><Link to="/cadastro/parada">Cadastro Parada</Link></p>
        <p><Link to="/checkin">Checkin</Link></p>
    </div>
    )
}
export default Barra;