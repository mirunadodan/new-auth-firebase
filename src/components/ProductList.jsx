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
                        key={product.id}
                        name={product.name}
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