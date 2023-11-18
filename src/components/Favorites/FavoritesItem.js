import React from 'react';
import { useDispatch } from 'react-redux';
import { removeFromFavorites } from './FavoritesSlice';
import '../Cart/CartItem.css';

const FavoritesItem = ({ item }) => {
  const dispatch = useDispatch();

  return (
    <div className="cartItem">
      <img className="cartItem__image" src={item.image} alt='item'/>
      <div className="cartItem__info">
        <p className="cartItem__title">{item.name}</p>
        <p className="cartItem__price">
          <strong>{item.price} {item.currency}</strong>
        </p>
        <button
          className='cartItem__removeButton' 
          onClick={() => dispatch(removeFromFavorites(item))}>
            Remove from Favorites
        </button>
      </div>
    </div>
  )
}

export default FavoritesItem;