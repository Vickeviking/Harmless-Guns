import React from 'react';
import "./Subtotal.css";
import CurrenzyFormat from "react-currency-format";
import { faBasketballBall } from '@fortawesome/free-solid-svg-icons';

function Subtotal() {
  return(<div className='subtotal'>
      <CurrenzyFormat
          renderText={(value) => (
              <>
              <p>
                Subtotal (0 items):
                <strong>0</strong>
                </p>
                <small className='subtotal_gift'>
                    <input type="checkbox" /> This order 
                    contains a Gift
                </small>
                </>
          )}
          decimalScale={2}
          value={0}
          displayType={"text"}
          thousandSeperator={true}
          prefix={"$"}
      />

  </div>
  );
}

export default Subtotal;
