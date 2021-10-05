import React from "react";
import background from "../images/background.png";
import "../styles/components/Product.css";

const Product = ({ product, handleAddToCart }) => {
    return (
        <div className="container-product" style={{
            backgroundImage: `url(${background})`,
            backgroundRepeat: 'no-repeat',
            backgroundPositionX: '110px',
            backgroundSize: 'contain'
        }}>
            <div className="product-image">
                <img width="100" src={product.image} alt={product.title} />
            </div>
            <div className="info-product">
                <div className="title-price">
                    <h3>{product.title}</h3>
                    <span><strong>${product.price}</strong></span>
                </div>
                <div className="description">
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consectetur hic, libero facilis.</p>
                </div>
                <div className="time" onClick={handleAddToCart(product)}>
                    <i class="fas fa-cart-plus"></i>
                    <p>Solicitar</p>
                </div>
            </div>
        </div>
    );
}

export default Product;