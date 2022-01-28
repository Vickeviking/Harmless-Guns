import React from 'react';
import './SubHeader.css'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faBars} from '@fortawesome/free-solid-svg-icons'
import {faCaretDown} from '@fortawesome/free-solid-svg-icons'

function Subheader() {
  return(
    <div className='SubHeaderNav'>

<div className='More'>
<FontAwesomeIcon className='BarsIcon' icon={faBars}></FontAwesomeIcon>
<h2>Alla</h2>
</div>

<div className='SubNav'>
    
<div className='PrimeNav'> 
<h2>Prime</h2>
<FontAwesomeIcon className='CaretIcon' icon={faCaretDown}></FontAwesomeIcon>
</div>
<h2>Best Seller</h2>
<h2>Offers</h2>
<h2>Gift Idea</h2>
<h2>Customer Service</h2>
<h2>PC & Video Games</h2>

</div>

<div className='Announcement'>
<h1>Brands of Sweden - Discover The Store</h1>
</div>

    </div>
  );
}

export default Subheader;
