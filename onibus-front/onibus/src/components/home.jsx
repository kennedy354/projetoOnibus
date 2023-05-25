import { Link,Outlet } from "react-router-dom"
import Barra from "./barra"

function Home(){
    return(
        <>
            <Barra/>
            <Outlet/>
        </>
    )
}
export default Home