import React from "react";
import { Link } from "react-router-dom";
import "../styles/components/Nav.css"

const Nav = () => {
    return (
        <nav>
            <ul>
                <li>
                    <Link to="/">
                        <i class="fas fa-home"></i>
                        <p>Inicio</p>
                    </Link>
                </li>
                <li>
                    <i class="fas fa-shopping-bag"></i>
                    <p>Servicios</p>
                </li>
                <li>
                    <i class="fas fa-user"></i>
                    <p>Perfil</p>
                </li>
            </ul>
        </nav>
    );
}

export default Nav;