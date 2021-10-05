import React, { useContext } from "react";
import AppContext from "../context/AppContext";
import { Link } from "react-router-dom";
import "../styles/components/Header.css";
import Logo from "../images/logo.svg";

const Header = () => {
    const { state } = useContext(AppContext);
    const { cart } = state;
    let count = 0;
    count = cart.length;
    return (
        <div className="top-menu">
            <div className="menu-burger">
                <i class="fas fa-bars"></i>
            </div>
            <img className="logo" src={Logo} alt="logo" />
            <Link to="/checkout">
                <div className="cart">
                    <i class="fas fa-shopping-cart"></i>
                    <span className="count-product">{count}</span>
                </div>
            </Link>
        </div>
    );
}

export default Header;