import '/src/style/barra.css';
import { Link,Outlet } from "react-router-dom"

function Barra() {
    return (
    <div className="nav">
        <p><Link to="/">Home</Link></p>
        <p><Link to="/login">Login</Link></p>
    </div>
    )
}
export default Barra;