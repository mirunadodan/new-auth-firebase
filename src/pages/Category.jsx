import React from 'react';
import { useParams } from 'react-router-dom';
import ProductList from '../components/ProductList';
import products from '../products.json';
import '../style/category.css'

export const Category = () => {
   const params = useParams();
   const categoryName = params.categoryName;
  console.log(products[categoryName].items);
  return (
    <div>
      <h2>Category: {categoryName}</h2>
        <div id='product-grid'>
    <ProductList products={products[categoryName].items} />
       </div> 
    </div>
  )
  
}
export default Category;