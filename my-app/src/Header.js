import React from "react";
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

  return (
    <div className="FullHeader"> 
<div className="Header">
  <Link to="/">
  <h1 className="rubrikName">Harmless Guns</h1>
  </Link>
   <div className="header_search">
        <input
        className="header_searchInput" type="text"/>
         <FontAwesomeIcon className="header_searchIcon" icon={faSearch}></FontAwesomeIcon>
    
 </div>

    <div className="header_nav">

        <div className="lang">
        <FontAwesomeIcon className="header_globeIcon" icon={faGlobe}></FontAwesomeIcon>
        <FontAwesomeIcon className="header_globeIcon" icon={faCaretDown}></FontAwesomeIcon>
        </div>

        <Link to={!user && '/login'}>
        <div onClick={handleAuthentication} className="header_option">
        <span className="header_optionLineOne">Hello {user ? user?.email : 'Guest'}</span>
        <span className="header_optionLineTwo">{user ? 'Sign Out' : 'Sign In'}</span>
        </div>
        </Link>

        <Link to={'/orders'}>
        <div className="header_option">
        <span className="header_optionLineOne">Return</span>
        <span className="header_optionLineTwo">& Orders</span>
        </div>
        </Link>

        <Link to="/checkout">
        <div className="header_optionBasket">
            <FontAwesomeIcon className="header_shopingBasket" icon={faShoppingCart}></FontAwesomeIcon>
            <span className="header_optionLineTwo header_basketCount">{basket?.length}</span>
        </div>
        </Link>
        

    </div>

</div>


    
<div className='SubHeaderNav'>

<div className='More'>
<FontAwesomeIcon className='BarsIcon' icon={faBars}></FontAwesomeIcon>
<h2>All</h2>
</div>

<div className='SubNav'>
    
<div className='PrimeNav'> 
<h2>Collections </h2>
<FontAwesomeIcon className='CaretIcon' icon={faCaretDown}></FontAwesomeIcon>
</div>
<h2><a href="">Best Seller</a> </h2>
<h2><a href="">Offers</a> </h2>
<h2><a href="">Gift Idea</a> </h2>
<h2><a href="">Customer Service</a> </h2>
<h2><a href="">Valentines Guns</a> </h2>

</div>

<div className='Announcement'>
  <div className='Space'></div>
<h1>Discover our new 1945 Collection  </h1>
</div>

    </div>
  


    </div>

  );

  
}


export default Header;
