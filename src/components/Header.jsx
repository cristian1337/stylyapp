import React from "react";
import "../styles/components/Header.css";
import Logo from "../images/logo.svg";

const Header = () => {
    return (
        <div className="top-menu">
            <div className="menu-burger">
                <i class="fas fa-bars"></i>
            </div>
            <div className="logo">
                <img src={Logo} alt="logo" />
            </div>
        </div>
    );
}

export default Header;