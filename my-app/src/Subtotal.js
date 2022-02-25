import React from 'react';
import "./Dashboard_Css/Subtotal.css";
import CurrenzyFormat from "react-currency-format";
import { useStateValue } from "./StateProvider";
import { getBasketTotal } from "./reducer";
import { useHistory } from 'react-router-dom';


function Subtotal() {
  const history = useHistory();
  const [{basket}, dispatch] = useStateValue(); //hämtar data från data layer

  return(<div className='subtotal'>
      <CurrenzyFormat
          renderText={(value) => (
              <>
              <p>
              Subtotal ({basket.length} items): <strong>{value}</strong>
                </p>
                <small className='subtotal_gift'>
                    <input type="checkbox" /> This order 
                    contains a Gift
                </small>
                </>
          )}
          decimalScale={2}
          value={getBasketTotal(basket)}
          displayType={"text"}
          thousandSeperator={true}
          prefix={"$"}
      />

        <button className='knappCheckOut' onClick={e => history.push('/payment')}>Proceed to Checkout</button>

  </div>
  );
}

export default Subtotal;
