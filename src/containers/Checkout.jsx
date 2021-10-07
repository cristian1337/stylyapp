import React, { useContext } from "react";
import AppContext from "../context/AppContext";
import { useHistory } from "react-router-dom";
import "../styles/components/Checkout.css";

const Checkout = () => {
    let history = useHistory();
    const { state } = useContext(AppContext);
    const { cart } = state;
    return (
        <div>
            <div className="back" onClick={history.goBack}>
                <i class="fas fa-arrow-left"></i>
                <p>Regresar</p>
            </div>
            <div className="container-products-cart">
                {cart.map((product) => (
                    <>
                    <hr />
                    <div className="product-cart">
                        <img width="100" src={product.image} alt="imagen producto" />
                        <div className="description-cart">
                            <h3>{product.title}</h3>
                            <p>${product.price}</p>
                        </div>
                        <div className="remove">
                            <i class="fas fa-trash-alt"></i>
                            <p>Eliminar</p>
                        </div>
                    </div>
                    </>
                ))}
            </div>
            <div className="total-sale">
                <div className="total">
                    <h3>Total:</h3>
                    <p>$4</p>
                </div>
                <div className="continue">
                    <h3>Cancelar</h3>
                    <button>Continuar</button>
                </div>
            </div>
        </div>
    );
}

export default Checkout;