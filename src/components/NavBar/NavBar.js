import "./NavBar.css"
import CartWidget from "./CartWidget";
import { Link } from 'react-router-dom'

const NavBar = () => {
    return(
        // Fragment
        <div>
            <ul className="navbar">
                <li><Link to="/"><button>Qwerty's</button></Link></li>
                <li><Link to="/Products"><button>Productos</button></Link></li>
                <li><Link to="/Contact"><button>Contacto</button></Link></li>
                <li><Link to="/Cart">
                    <CartWidget />
                </Link></li>
                
                
                
                
                
            </ul>
        </div>
    )
}

export default NavBar;