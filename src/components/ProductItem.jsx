import { useDispatch } from 'react-redux';
import {addToCart} from '../redux/cartSlice';
import {addToFavorites} from '../redux/favoritesSlice';

function Item({id, title, image, price, currency}) {

  const dispatch = useDispatch();

  return (
    <div className="item">
      <div className="item__info">
      <img
        src={image}
        alt="item"
      />
        <p className="item__title">{title}</p>
        <p className="item__price">
          <strong>{price} {currency}</strong>
        </p>
      </div>
      <button 
        onClick={() => 
          dispatch(addToCart({
            id, title, image, price, currency
          }))
        }>Add to Cart
      </button>
      <div>
      <button 
        onClick={() => 
          dispatch(addToFavorites({
            id, title, image, price, currency
          }))
        }>
          Add to Favorites
      </button>
      </div>
    </div>
  )
}

export default Item