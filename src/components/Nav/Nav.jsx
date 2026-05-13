import { Link } from "react-router-dom";
import "./Nav.css";

export const Nav = () => {
    return (
        <nav>
            <ul className='nav-list-nav'>
                <li>
                    <Link to={"/"}>Home</Link>
                </li>
                <li>
                    <Link to={"/carrito"}>Carrito</Link>
                </li>
            </ul>
        </nav>
    );
};