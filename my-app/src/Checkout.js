import React from 'react';
import CheckoutProduct from './CheckoutProduct';
import './Dashboard_Css/Checkout.css'
import baner from './img/Checkout.jpg'
import { useStateValue } from './StateProvider';
import Subtotal from './Subtotal';

function Checkout() {
  const[{basket}, dispatch] = useStateValue(); 
  
  return(<div className='Checkout'>
      <div className='checkout_left'>
        <img className="checkout_ad" src="https://www.houseoforganics.co.uk/wp-content/uploads/2016/11/SSL-banner.jpg" alt="{baner}" />
        <div>
          <h2 className='checkout_title'>
              Your shopping Basket
          
          </h2>

          {basket.map((item) => (
         <CheckoutProduct
            id={item.id}
            title={item.title}
            image={item.image}
            price={item.price}
            rating={item.rating}
         />
        ))}
        </div>
      </div>

      <div className="checkout_right">
        <Subtotal />
      </div>
  </div>


  );
}

export default Checkout;
