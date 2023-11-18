import React from 'react';
import '../style/ProductItem.css';
import { addToCart } from './Cart/CartSlice';
import { useDispatch } from 'react-redux';
import { addToFavorites, removeFromFavorites } from './Favorites/FavoritesSlice';
import { useState } from "react";

function ProductItemCopy({id, name, image, price, currency}) {

    const dispatch = useDispatch();

    const [favorite, setFavorite] = useState(false);
    const [toggleText, settoggleText] = useState("Add to Favorites")
   
    const toggle = () => {
          let buttonText = document.getElementById("favbutton");

          if (favorite !== true) {
            dispatch(addToFavorites({
              id, name, image, price, currency
            }))
            setFavorite(true)
            settoggleText("Remove From Favorites");
            buttonText.innerHTML = "Remove From Favorites"
          }
          else {
            dispatch(removeFromFavorites({
              id, name, image, price, currency
            }))
            setFavorite(false)
            settoggleText("Add to Favorites");
            buttonText.innerHTML = "Add to Favorites"
          }
          
    }



    return (
      <div className="item">
        <div className="item__info">
        <img
          src={image}
          alt="item"
        />
          <p className="item__title">{name}</p>
          <p className="item__price">
            <strong>{price} {currency}</strong>
          </p>
        </div>
        
        <button 
          onClick={() => 
            dispatch(addToCart({
              id, name, image, price, currency
            }))
          }>Add to Cart
        </button>

        <div>
        <button id="favbutton" onClick={toggle}>{toggleText}
        </button>

        </div>
      </div>
    )
  }
  
  
export default ProductItemCopy;