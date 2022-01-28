import React from "react";
import "./Header.css";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faSearch} from '@fortawesome/free-solid-svg-icons'
import {faShoppingCart} from '@fortawesome/free-solid-svg-icons'
import {faCaretDown} from '@fortawesome/free-solid-svg-icons'
import {faGlobe} from '@fortawesome/free-solid-svg-icons'

function Header() {
  return (
<div className="Header">
   <img className="Header_logo" src={require('./img/AmazonLogga.gif')} />
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

        <div className="header_option">
        <span className="header_optionLineOne">Hello Guest</span>
        <span className="header_optionLineTwo">Sign In</span>
        </div>

        <div className="header_option">
        <span className="header_optionLineOne">Return</span>
        <span className="header_optionLineTwo">& Orders</span>
        </div>

        <div className="header_option">
        <span className="header_optionLineOne">Your</span>
        <span className="header_optionLineTwo">Prime</span>
        </div> 

        <div className="header_optionBasket">
            <FontAwesomeIcon className="header_shopingBasket" icon={faShoppingCart}></FontAwesomeIcon>
            <span className="header_optionLineTwo header_basketCount">0</span>
        </div>

    </div>

</div>
  );
}


export default Header;
