import React from 'react';
import './Dashboard_Css/Product.css'
import './Dashboard_Css/Home.css'
import { useStateValue } from './StateProvider';


function Product({id, title, image, price, rating}) //prop
{
    const[{basket}, dispatch] = useStateValue();

    const addToBasket = () => {
        //dispatch the item to data layer
        dispatch({ //används som en pistol och skjuter in data i data layer
            type: 'ADD_TO_BASKET',
            item: {
                id: id,
                title: title,
                image: image,
                price: price,
                rating: rating,

            },
        });
    };

    return(
<div className='product'>
    <div className='product_info'>
        <h6 className='title'>{title}</h6>
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
<button onClick={addToBasket}>Add to basket</button>
</div>
    );
}

export default Product;
