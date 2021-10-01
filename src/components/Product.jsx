import React from "react";
import "../styles/components/Product.css"

const Product = ({product}) => {
    return (
        <div className="container-product">
            <div className="product-image">
                <img width="100" src={product.image} alt={product.title} />
            </div>
            <div className="info-product">
                <h3>{product.title}</h3>
                <strong>${product.price}</strong>
                <div className="time">
                    <i class="far fa-clock"></i>
                    <p>Aprox. 55min</p>
                </div>
            </div>
            <div className="arrow">
                <i class="fas fa-chevron-right"></i>
            </div>
        </div>
    );
}

export default Product;