import React from "react";
import Product from "./Product";
import "../styles/components/Product.css"

const Products = ({ products }) => {
    return (
        <div className="container-products">
            {products.map(product => (
                <Product key={product.id} product={product} />
            ) )}
        </div>
    );
}

export default Products;