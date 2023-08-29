import React from 'react';
import { Link } from 'react-router-dom';
import { auth } from '../firebase';
import { useAuthState } from "react-firebase-hooks/auth";
import Logo from '../assets/logo.png';
import Cart from '../assets/cart.png'
import './Header.css';

const Navbar = () => {
  const { user, logOut } = useAuthState(auth);

  const handleSignOut = async () => {
    try {
      await logOut()
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div id='header'>
      <div id='header-left'>
        <Link id='a' to="/">
          <img src={Logo} alt="Sirluggia Shop" id='logo'/>
        </Link>
        <Link id='a' to="/about">About</Link>
        <Link id='a' to="/products">Products</Link>
      </div>

      <div id='header-right'>
        {/* ATENTIE! Daca avem informatii despre user, atunci ii vom afisa un mesaj.
         Daca userul nu este logat, se va primi null ca valoare, deci nu com afisa nimic.*/}
          { user
              ? <p id='a'>Salut, {user.displayName}!</p>
                  : null
                    } 
          {user?.displayName ? (
               <button id='a' onClick={handleSignOut}>Logout</button>
                ) : (
           <Link id='a' to='/login'>Sign in</Link>
                    )}

          <Link id='a' to="/Cart"><img src={Cart} alt="Shopping Cart" id='cart'/></Link>
       </div>

    </div>
  );
};

export default Navbar;