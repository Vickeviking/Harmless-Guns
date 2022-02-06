import React from 'react';
import "./Dashboard_Css/Subtotal.css";
import CurrenzyFormat from "react-currency-format";
import { useStateValue } from "./StateProvider";
import { getBasketTotal } from "./reducer";


function Subtotal() {
  const [{basket}, dispatch] = useStateValue(); //hämtar data från data layer
  console.log(basket);
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

        <button>Proceed to Checkout</button>

  </div>
  );
}

export default Subtotal;