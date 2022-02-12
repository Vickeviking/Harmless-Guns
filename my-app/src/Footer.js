import React from 'react';
import './Dashboard_Css/Footer.css'
import partner from './img/partner_visa.gif'

function Footer() {
  return (
      <footer>
        <div className='omslag'>
        <div className='Del'>
          <h1> Hej jag är en footer </h1>
          <h2> Hej jag är en footer </h2>
          <h2> Hej jag är en footer </h2>
          <h2> Hej jag är en footer </h2>
          <h2> Hej jag är en footer </h2> 
        </div>

        

        <div className='Del'>
          <h1> Hej jag är en footer </h1>
          <h2> Hej jag är en footer </h2>
          <h2> Hej jag är en footer </h2>
          <h2> Hej jag är en footer </h2>
          <h2> Hej jag är en footer </h2> 
        </div>

        

        <div className='Del'>
          <h1> Hej jag är en footer </h1>
          <h2> Hej jag är en footer </h2>
          <h2> Hej jag är en footer </h2>
          <h2> Hej jag är en footer </h2>
          <h2> Hej jag är en footer </h2> 
        </div>
        </div>

        <div className='borderStyling'>
          
        </div>

        <div className='Partners'>
<div className='Partner_item'><img className='Partner_img' src={partner} alt="Partners" /></div>
<div className='Partner_item'><img className='Partner_img' src={partner} alt="Partners" /></div>
<div className='Partner_item'><img className='Partner_img' src={partner} alt="Partners" /></div>
<div className='Partner_item'><img className='Partner_img' src={partner} alt="Partners" /></div>
<div className='Partner_item'><img className='Partner_img' src={partner} alt="Partners" /></div>
        </div>

      </footer>
  );
}

export default Footer;
