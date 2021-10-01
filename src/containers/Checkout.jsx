import React from "react";

const Checkout = () => {
    return (
        <div>
            <div>
                <h3>Lista de pedidos</h3>
                <div>
                    <h4>producto</h4>
                    <span>$1.000</span>
                </div>
                <button type="button" >Eliminar</button>
            </div>
            <div>
                <h5>Total:</h5>
                <span>$1.000</span>
                <button type="button">Continuar pedido</button>
            </div>
        </div>
    );
}

export default Checkout;