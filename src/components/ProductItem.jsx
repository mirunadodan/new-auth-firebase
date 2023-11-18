import React from 'react';
import '../style/ProductItem.css';
import { addToCart } from './Cart/CartSlice';
import { useDispatch } from 'react-redux';
import { addToFavorites, removeFromFavorites } from './Favorites/FavoritesSlice';
import { useState } from "react";

function ProductItem({id, name, image, price, currency}) {

    const dispatch = useDispatch();

    const [favorite, setFavorite] = useState(false);
    const [toggleText, settoggleText] = useState("Add to Favorites");
    const [toggleImage, settoggleImage] = useState("https://t4.ftcdn.net/jpg/05/34/59/33/360_F_534593362_nkbfsQgq1ebwFrPEWgUecre3JvScKtU7.jpg");

    const toggle = () => {

      if (favorite !== true) { //daca nu e in favorite deja
        dispatch(addToFavorites({
          id, name, image, price, currency
        }))
        setFavorite(true)
        settoggleImage("https://static.thenounproject.com/png/62249-200.png")
        settoggleText("Remove From Favorites");
      }
      else {
        dispatch(removeFromFavorites({
          id, name, image, price, currency
        }))
        setFavorite(false)
        settoggleImage("https://t4.ftcdn.net/jpg/05/34/59/33/360_F_534593362_nkbfsQgq1ebwFrPEWgUecre3JvScKtU7.jpg")
        settoggleText("Add to Favorites");
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
        <button id="favbutton" onClick={toggle}>
          {toggleText}
          <img src={toggleImage}/>
        </button>
        </div>

      </div>
    )
  }
  
  
export default ProductItem;