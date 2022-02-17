import React from "react";
import "./Dashboard_Css/Footer.css";
import partner from "./img/partner.gif";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import instagram from "./img/instagram.gif";
import facebook from "./img/facebook.gif";
import linkedIn from "./img/linkedIn.gif";

function Footer() {
  return (
    <footer>
      <div className="omslag">
        <div className="Del">
          <h1> Hej jag är en footer </h1>
          <h2> Hej jag är en footer </h2>
          <h2> Hej jag är en footer </h2>
          <h2> Hej jag är en footer </h2>
          <h2> Hej jag är en footer </h2>
        </div>

        <div className="Del">
          <h1> Hej jag är en footer </h1>
          <h2> Hej jag är en footer </h2>
          <h2> Hej jag är en footer </h2>
          <h2> Hej jag är en footer </h2>
          <h2> Hej jag är en footer </h2>
        </div>

        <div className="Del">
          <h1> Hej jag är en footer </h1>
          <h2> Hej jag är en footer </h2>
          <h2> Hej jag är en footer </h2>
          <h2> Hej jag är en footer </h2>
          <h2> Hej jag är en footer </h2>
        </div>
      </div>

      <div className="borderStyling"></div>

      <div className="Partners">
        <div className="Partner_item">
          
  <div className='Partner_item'><img className='Partner_img' src={partner} alt="Partners" /></div>
  <div className='Partner_item'><img className='Partner_img' src={partner} alt="Partners" /></div>
  <div className='Partner_item'><img className='Partner_img' src={partner} alt="Partners" /></div>
  <div className='Partner_item'><img className='Partner_img' src={partner} alt="Partners" /></div>
  <div className='Partner_item'><img className='Partner_img' src={partner} alt="Partners" /></div>
        </div>

        <div className="SocialaMedier">
        <div className="Partner_item">
        
          <img src={instagram} />
     
          <img src={facebook} />

          <img src={linkedIn} />
        </div>
      </div>

      </div>

     
    </footer>
  );
}

export default Footer;
