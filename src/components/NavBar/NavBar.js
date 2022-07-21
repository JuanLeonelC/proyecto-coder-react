import "./NavBar.css"
import CardWidget from "./CartWidget";

const NavBar = () => {
    return(
        // Fragment
        <div>
            <ul className="navbar">
                <li><a href="#">Qwerty's</a></li>
                <li><a href="#">Productos</a></li>
                <li><a href="#">Sobre Nosotros</a></li>
                <li><a href="#">Contactanos</a></li>
                <CardWidget />
            </ul>
        </div>
    )
}

export default NavBar;