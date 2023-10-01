import './cartItem.css'
import { removeFromFavorites} from '../redux/favoritesSlice'
import { useDispatch } from 'react-redux'

function FavoritesItem({id, image, title, price, currency, quantity=0}) {
  const dispatch = useDispatch();

  return (
    <div className="cartItem">
      <img className="cartItem__image" src={image} alt='item'/>
      <div className="cartItem__info">
        <p className="cartItem__title">{title}</p>
        <p className="cartItem__price">
          <strong>{price} {currency}</strong>
        </p>
        <button
          className='cartItem__removeButton' 
          onClick={() => dispatch(removeFromFavorites(id))}>
            Remove
        </button>
      </div>
    </div>
  )
}

export default FavoritesItem