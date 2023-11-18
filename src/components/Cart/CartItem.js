import './CartItem.css'
import { incrementQuantity, decrementQuantity, removeFromCart} from './CartSlice'
import { useDispatch } from 'react-redux'


const CartItem = ({ item }) => {
  const dispatch = useDispatch();

  return (
    <div className="cartItem">
      <img className="cartItem__image" src={item.image} alt='item'/>
       <div className="cartItem__info">
        <p className="cartItem__title">{item.name}</p>
        <p className="cartItem__price">
          <strong>{item.price*item.quantity} {item.currency}</strong>
        </p>
       <div className='cartItem__incrDec'>
      <button onClick={() => dispatch(decrementQuantity(item))}>-</button>
          <p>{item.quantity}</p>
      <button onClick={() => dispatch(incrementQuantity(item))}>+</button>
        </div>
      <button className='cartItem__removeButton' onClick={() => dispatch(removeFromCart(item))}>Remove from cart</button>
      </div>
    </div>
  );
};

export default CartItem;
