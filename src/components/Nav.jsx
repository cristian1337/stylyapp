import React from "react";
import "../styles/components/Nav.css"

const Nav = () => {
    return (
        <nav>
            <ul>
                <li>
                    <i class="fas fa-home"></i>
                    <p>Inicio</p>
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