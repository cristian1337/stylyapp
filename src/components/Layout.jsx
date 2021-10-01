import React from "react";
import Header from "./Header";
import Nav from "./Nav";

const Layout = ({children}) => {
    return (
        <div className="Main">
            <Header />
                {children}
            <Nav /> 
        </div>
    );
}

export default Layout;