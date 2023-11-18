import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import { auth, db, logout } from "../apis/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import Logo from '../assets/Clothes_Unlimited_logo.png';
import shopping_cart from '../assets/shopping_cart.png';
import heart_empty from '../assets/heart_empty.png';
import heart_full from '../assets/heart_empty.png';
import account from '../assets/account.png';
import '../style/navbar.css';
import '../style/utils.css';
import { useSelector } from 'react-redux';
import { useNavigate } from "react-router-dom";
import { query, collection, getDocs, where } from "firebase/firestore";

const Navbar = () => {
  const { user, logOut } = useAuthState(auth);
  
  const cart = useSelector((state) => state.cart.items);

  const fav = useSelector((state) => state.favorites.items);
  
  const getTotalQuantity = () => {
    if (Object.values(cart).length >0) {
    let total = 0;
    Object.values(cart).forEach(item => {
      total += item.quantity
    })
    return total
  }
  };

  const getTotalFav = () => {
    let totalFav = 0
    Object.values(fav).forEach(item => {
      totalFav += item.quantity
    })
    return totalFav
  };

  const handleSignOut = async () => {
    try {
      await logOut()
    } catch (error) {
      console.log(error)
    }
  }

  return (

    <header className="header">

      <nav className="header__nav">
        <Link className="header__link link" to="/women">Women</Link>
        <Link className="header__link link" to="/men">Men</Link>
        <Link className="header__link link" to="/kids">Kids</Link>
      </nav>

      <div className="header__logo">
        <Link to="/">
          <img className='header__logo__img' src={Logo} alt="Clothes Unlimited" id='logo'/>
        </Link>
      </div>

      <div className="header__account">
        { user
              ? <p id='a'>Salut, {user.displayName}!</p>
                  : null
                    } 
          {user?.displayName ? (
               <button id='a' onClick={handleSignOut}>Logout</button>
                ) : (
        
        <Link className='header__account__link link' to='/login'>
            <img className="header__account__img" src={account} alt="Account"/>
            Account</Link>
                    )}

        <Link className='header__account__link link' to="/favorites"><img className="header__account__img" src={heart_empty} alt="Favorites"/>
          Favorites{/* <p>{getTotalFav()} Favorites</p> */}
        </Link>            
        
        <Link className='header__account__link link' to="/cart">
          <img className="header__account__img" src={shopping_cart} alt="Shopping Cart"/>
          Cart {getTotalQuantity() || 0}
        </Link>
        

      </div>

    </header>


    // <div id='header'>

    //   <div id='header-left'>
    //     <Link id='a' to="/">
    //       <img src={Logo} alt="Clothes Unlimited" id='logo'/>
    //     </Link>
    //     <Link id='a' to="/about">About</Link>
    //     <Link id='a' to="/category">Products</Link>
    //  

    //   </div>

    //   <div id='header-right'>
    //       { user
    //           ? <p id='a'>Salut, {user.displayName}!</p>
    //               : null
    //                 } 
    //       {user?.displayName ? (
    //            <button id='a' onClick={handleSignOut}>Logout</button>
    //             ) : (
    //        <Link id='a' to='/login'>Sign in</Link>
    //                 )}

    //       <Link id='a' to="/cart"><img src={Cartimg} alt="Shopping Cart" id='cart'/>
    //       <p>{getTotalQuantity() || 0}</p>
    //         </Link>
    //       <Link id='a' to="/favorites"><img src={Love} alt="Favorites" id='cart'/>
    //       <p>{getTotalFav()}</p>
    //         </Link>
    //    </div>

    // </div>
  );
};

export default Navbar;