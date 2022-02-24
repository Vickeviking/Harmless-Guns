import React from "react";
import "./Dashboard_Css/Footer.css";
import partner from "./img/partner.gif";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import instagram from "./img/instagramLogo.png";
import facebook from "./img/facebook.gif";
import linkedIn from "./img/linkedIn.gif";

function Footer() {
  return (
    <footer>
      <div className="omslag">
        <div className="Del">
          <h1> Om oss</h1>
          <h2> kontakta oss här</h2>
          <h2> Vi finns på crafordsväg</h2>
          <h2> harmless@gamil.com </h2>
          <h2> 073-3589216 </h2>
        </div>

        <div className="Del">
          <h1> Vårt sortiment </h1>
          <h2> Vi säljer props alltså fake </h2>
          <h2> vi har knivar och stickvapen </h2>
          <h2> vi säljer även semi automatiska vapen </h2>
        </div>

        <div className="Del">
          <h1> Våra köpvillkor </h1>
          <h2> 24dagars retur rätt </h2>
          <h2> öppet köp </h2>
          <h2> Rea på rea gäller inte här </h2>
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

        <div className="socialaMedier">
    
        
          <img className="mediaBild" src={instagram} />
     
          <img className="mediaBild" src={instagram} />

          <img className="mediaBild" src={instagram} />

          <img className="mediaBild" src={instagram} />
        
      </div>

      </div>

     
    </footer>
  );
}

export default Footer;
