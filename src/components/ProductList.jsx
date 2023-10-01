import React from 'react';
import ProductItem from './ProductItem';

function ProductList(props) {
    // Extragem vectorul de produse primit din Category
    const { products } = props;

    return (
        <div>
            {
                products
                ? products.map((product) => {
                    return (
                        <ProductItem
                        id={product.id}
                        title={product.title}
                        image={product.image}
                        price={product.price}
                        currency={product.currency}
                        />
                    )
                }
                )
                : null }
        </div>
    )
        
}

export default ProductList;