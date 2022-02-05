import React from 'react';
import './Dashboard_Css/Product.css'
import './Dashboard_Css/Home.css'

function Product({title, image, price, rating}) //prop
{
    return(
        <div className='product'>
<div className='product_info'>
    <p>{title}</p>
    <p className='product_price'> 
    <small>$</small>
    <strong>{price}</strong>
    </p>
   <div className='product_rating'>
        {Array(rating).fill().map((_, i) => (
                    <p>⭐</p>
        ))}
   </div>
</div>

<img src={image}  />
<button>Add to basket</button>
</div>
    );
}

export default Product;
