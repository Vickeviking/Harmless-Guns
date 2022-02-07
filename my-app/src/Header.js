import React, { useState } from "react";
import "./Dashboard_Css/Header.css";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faSearch} from '@fortawesome/free-solid-svg-icons'
import {faShoppingCart} from '@fortawesome/free-solid-svg-icons'
import {faCaretDown} from '@fortawesome/free-solid-svg-icons'
import {faGlobe} from '@fortawesome/free-solid-svg-icons'
import {faBars} from '@fortawesome/free-solid-svg-icons'
import { Link } from "react-router-dom";
import { useStateValue } from "./StateProvider";
import { auth } from "./firebase";

function Header() {
 const [{basket, user}, dispatch] = useStateValue();
  
  const handleAuthentication = () => {
    if (user){
      auth.signOut();
    }
  }
   const [isActive, setActive] = useState("false");
   const handleToggle = () => {
    setActive(!isActive);
   }
  return (
    <nav>
      <div className="container">

      <Link to={'/'} style={{ textDecoration: 'none' }}>
      <h1>Harmless Guns</h1>
      </Link>
     

        <div className={isActive ? "menu" : "dropbar"}>
         
          <Link to={'/'}>
          <h2>Home</h2>
          </Link>

          <Link to={'/login'}>
          <h2>Our Stock</h2>
          </Link>

          <Link to={'/login'}>
          <h2>{user ? 'Sign Out' : 'Sign In'}</h2>
          </Link>

          
        <Link to={'/orders'}>
        <div className="header_option">
        <span className="header_optionLineOne">Return & Orders</span>
        </div>
        </Link>

          <Link to="/checkout">
        <div className="header_optionBasket">
            <FontAwesomeIcon className="header_shopingBasket" icon={faShoppingCart}></FontAwesomeIcon>
            <span className="header_optionLineTwo header_basketCount">{basket?.length}</span>
        </div>
        </Link>

        </div>

        <button onClick={handleToggle} className="hamburger">
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
     
    </nav>
  );

  
}


export default Header;
