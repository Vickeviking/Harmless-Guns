import React from 'react';
import './Product.css'
import './Home.css'
import prodGlock from './img/Product_Glock.jpg'

function Product()
{
    return(
        <div className='product'>
<div className='product_info'>
    <p className='product_name'>The lean startup</p>
    <p className='product_price'> 
    <small>$</small>
    <strong>19.99</strong>
    </p>
   <div className='product_rating'>
        <p>⭐</p>
        <p>⭐</p>
        <p>⭐</p>
   </div>
</div>

<img src={prodGlock} alt="{prodGlock}" />
<button>Add to basket</button>
</div>
    );
}

export default Product;
