import React from 'react';
import './Dashboard_Css/Checkout.css'
import baner from './img/Checkout.jpg'
import Subtotal from './Subtotal';

function Checkout() {
  return(<div className='Checkout'>
      <div className='checkout_left'>
        <img className="checkout_ad" src="https://www.houseoforganics.co.uk/wp-content/uploads/2016/11/SSL-banner.jpg" alt="{baner}" />
        <div>
          <h2 className='checkout_title'>
              Your shopping Basket
          </h2>
        </div>
      </div>

      <div className="checkout_right">
        <Subtotal />
      </div>
  </div>


  );
}

export default Checkout;
