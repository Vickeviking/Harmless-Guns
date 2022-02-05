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
  );
}

export default Subheader;
