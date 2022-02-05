import React from 'react';
import './Home.css';
import logo from './img/HeroValentinesImg2.jpg'
import Product from "./Product";


function Home() {
  return <div className='home'>
      <div className='home_container'>
         <img className='HeroImg' src={logo} alt={"logo"}/> 

         <div className='home_row'>
          <Product />
          <Product />
         </div>

          <div className='home_row'>
  {/* Product */}
    {/* Product */}
      {/* Product */}
          </div>

          <div className='home_row'>
  {/* Product */}
          </div>

      </div>   
  </div>;
}

export default Home;
