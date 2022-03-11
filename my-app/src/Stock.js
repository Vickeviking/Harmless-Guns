import React from 'react'
import { useState } from 'react';
import './Dashboard_Css/Stock.css'
import Product from './Product';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faCaretLeft} from '@fortawesome/free-solid-svg-icons'
import {faCaretRight} from '@fortawesome/free-solid-svg-icons'

function Stock() {


  const [isActive, setActive] = useState("false");  /*Här kollar vi om användaren är inloggad*/
   const handleToggle = () => { 
    setActive(!isActive);
   }

  return (
    <div className='Stock'>
      <h1 className='rubrikStock'>Our Stock</h1>

      <div className='paketMedProdukter'>

                
      <div className='bildRad'>
        <div>
          <h1 className='ProduktTyp'>Our HandGuns</h1>
        </div>

        <div className='produkterna'>
        <FontAwesomeIcon className="shoppingArrows" icon={faCaretLeft} size = '3x'></FontAwesomeIcon>

        <Product 
       id="18978"
       title='The hitman startup glock'
       price={59.99}
       image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqlvCMLUAWdLIbted8411LAxH-B3aRnwm8Wg&usqp=CAU" 
       rating={5} />

       
      <Product 
       id="18978"
       title='The hitman startup glock'
       price={59.99}
       image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqlvCMLUAWdLIbted8411LAxH-B3aRnwm8Wg&usqp=CAU" 
       rating={5} />

       
      <Product 
       id="18978"
       title='The hitman startup glock'
       price={59.99}
       image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqlvCMLUAWdLIbted8411LAxH-B3aRnwm8Wg&usqp=CAU" 
       rating={5} />

        
      <FontAwesomeIcon className="shoppingArrows" icon={faCaretRight} size = '3x' ></FontAwesomeIcon>

        </div>
      
       
      </div>
      
      <div className='bildRad'>
      <div>
          <h1 className='ProduktTyp'>Our Knives</h1>
      </div>

      <div className='produkterna'>
      <FontAwesomeIcon className="shoppingArrows" icon={faCaretLeft} size = '3x' ></FontAwesomeIcon>

      <Product 
               id="209182"
               title='The Butterfly'
               price={549.99} 
               image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0-MKlhBsiWf5mULfC1BtGSjj2_sKhO1c_Nw&usqp=CAU" 
               rating={4}
            />

      <Product 
               id="209182"
               title='The Butterfly'
               price={549.99} 
               image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0-MKlhBsiWf5mULfC1BtGSjj2_sKhO1c_Nw&usqp=CAU" 
               rating={4}
            />

      <Product 
               id="209182"
               title='The Butterfly'
               price={549.99} 
               image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0-MKlhBsiWf5mULfC1BtGSjj2_sKhO1c_Nw&usqp=CAU" 
               rating={4}
            />
          
      <FontAwesomeIcon className="shoppingArrows" icon={faCaretRight} size = '3x' ></FontAwesomeIcon>
      </div>
      </div>
      
      <div className='bildRad'>
      <div>
          <h1 className='ProduktTyp'>Our Rifles</h1>
      </div>

      <div className='produkterna'>

      <FontAwesomeIcon className="shoppingArrows" icon={faCaretLeft} size = '3x' ></FontAwesomeIcon>
      
            <Product 
            id="189768"
            title='The famous m4'
            price={179.99}
            image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQaXxioD13XuPx2SiN4etozvh3CbB78sK1vwA&usqp=CAU" 
            rating={4}
            />

            <Product 
            id="189768"
            title='The famous m4'
            price={179.99}
            image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQaXxioD13XuPx2SiN4etozvh3CbB78sK1vwA&usqp=CAU" 
            rating={4}
            />
        
            <Product 
            id="189768"
            title='The famous m4'
            price={179.99}
            image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQaXxioD13XuPx2SiN4etozvh3CbB78sK1vwA&usqp=CAU" 
            rating={4}
            />

      <FontAwesomeIcon className="shoppingArrows" icon={faCaretRight} size = '3x' ></FontAwesomeIcon>
      </div>
      </div>

      </div>


    </div>
  )
}

export default Stock