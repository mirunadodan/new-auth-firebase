import React from 'react';
import { useSelector } from 'react-redux';
import FavoritesItem from './FavoritesItem';
import '../Cart/Cart.css';

const Favorites = () => {
  const favorites = useSelector((state) => state.favorites.items);
  console.log(favorites)

  return (
    <div className="cart">
      <div className="cart__left">
        <div>
          <h3>Shopping favorites: {Object.values(favorites).length}</h3>
          {Object.values(favorites).map((item) => (
        <FavoritesItem key={item.id} item={item} />
      ))}
        </div>
      </div>
    </div>
  )
}

export default Favorites;