import './total.css'
import {useSelector} from 'react-redux'

function Total() {

  const cart = useSelector((state) => state.cart)

  const getTotal = () => {
    let totalQuantity = 0
    let totalPrice = 0
    let totalCurrency = ""
    cart.forEach(item => {
      totalQuantity += item.quantity
      totalPrice += item.price * item.quantity
      totalCurrency = item.currency
    })
    return {totalPrice, totalQuantity, totalCurrency}
  }
 
  return (
    <div className="total">
      <h2>ORDER SUMMARY</h2>
      <div>
        <p className="total__p">
          total ({getTotal().totalQuantity} items) 
          : <strong>{getTotal().totalPrice} {getTotal().totalCurrency}</strong>
        </p>
      </div>
    </div>
  )
}

export default Total