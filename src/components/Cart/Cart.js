import Total from './Total'
import CartItem from './CartItem'
import { useSelector } from 'react-redux'
import './Cart.css';


const Cart = () => {
  const cart = useSelector((state) => state.cart.items);
  
  if (Object.values(cart).length >0) {

  return (
    <div className="cart">
      <div className="cart__left">
    <div>
      <h2>Products in cart: {Object.values(cart).length}</h2>
      {Object.values(cart)?.map((item) => (
        <CartItem key={item.id} item={item} />
      ))}
    </div>
    </div>
    </div>
  
      );
  }
  else return "Cart is empty";
};

export default Cart;

// function Cart() {

//   const cart = useSelector((state) => state.cart);
//   console.log(Object.values(cart).length)
//   if (Object.values(cart).length >0) {

//     return (
//       <div className="cart">
//         <div className="cart__left">
//           <div>
//             <h3>Produse in cos: {Object.values(cart).length}</h3>
//             { 
//             Object.values(cart)?.map((item) => {
          
//               let i=+0;
//                return <CartItem
//                 key={item[i].id}
//                 id={item[i].id}
//                 image={item[i].image}
//                 name={item[i].name}
//                 price={item[i].price} 
//                 currency={item[i].currency}
//                 quantity={item[i].quantity}
//               />
              
//   })
//   }
  
//           </div>
//         </div>
  
//         <div className="cart__right">
//           <Total/>
//         </div>
  
//       </div>
//     )

//   }
//   else return "Cart is empty";
  
// }

// export default Cart;