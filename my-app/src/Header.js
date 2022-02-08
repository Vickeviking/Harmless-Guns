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
      <div className={isActive ? "container" : "dropbarNav"}>

      <Link to={'/'} style={{ textDecoration: 'none' }}>
      <h1>Harmless Guns</h1>
      </Link>
     
<div className={isActive ? "burgerAndNav" : "dropbarTime"}>
        <div className={isActive ? "menu" : "dropbar"}>
         
          <Link to={'/'} style={{ textDecoration: 'none' }}>
          <h2>Home</h2>
          </Link>

          <Link to={'/login'} style={{ textDecoration: 'none' }}>
          <h2>Our Stock</h2>
          </Link>

          <Link to={!user && '/login'} style={{ textDecoration: 'none' }}>
          <div onClick={handleAuthentication} className="header_option">
          <h2>{user ? 'Sign Out' : 'Sign In'}</h2>
          </div>
          </Link>
         
          
        <Link to={'/orders'} style={{ textDecoration: 'none' }}>
        <div className="header_option">
        <h2><span className="header_optionLineOne">Return & Orders</span></h2>
        </div>
        </Link>

          <Link to={"/checkout"} style={{ textDecoration: 'none' }} >
        <div className={isActive ? " header_optionBasket" : "cartFlex"}>
          <h2> <FontAwesomeIcon className="header_shopingBasket" icon={faShoppingCart}></FontAwesomeIcon><span className="header_optionLineTwo header_basketCount">{basket?.length}</span></h2> 
        </div>
        </Link>

        </div>

        <button onClick={handleToggle} className={isActive ? "hamburger" : "hamburgerActive"}>
          <span></span>
          <span></span>
          <span></span>
        </button>
        </div>
      </div>
     
    </nav>
  );

  
}


export default Header;
