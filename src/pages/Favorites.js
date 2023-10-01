import FavoritesItem from '../components/FavoritesItem'
import { useSelector } from 'react-redux'
import '../style/cart.css'

function Favorites() {

  const favorites = useSelector((state) => state.favorites);
  console.log(favorites)

  return (
    <div className="cart">
      <div className="cart__left">
        <div>
          <h3>Shopping favorites</h3>
          {favorites?.map((item) => (
            <FavoritesItem
              key={item.id}
              id={item.id}
              image={item.image}
              title={item.title}
              price={item.price} 
              currency={item.currency}
              quantity={item.quantity}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Favorites;