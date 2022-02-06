import React, { useEffect } from "react";
import Header from "./Header";
import Home from "./Home";
import {BrowserRouter as Router, Switch, Route }
from "react-router-dom";
import Checkout from "./Checkout";
import Login from "./Login";
import {auth} from "./firebase"
import { useStateValue } from "./StateProvider";
import Payment from "./Payment";
import { loadStripe } from "@stripe/stripe-js";
import { Elements} from "@stripe/react-stripe-js";

const promise = loadStripe('pk_test_51KQGFgAqBpxcVG5VWEMgXW84xp29c2E2Toacwz4LBOhVLJtzg8LiF7nZa79Vd8VWikujmwOrObXpvu8A4A1lifPk00r2bOANdx');

function App() {
  const [{}, dispatch] = useStateValue();

  useEffect(() => {
    //körs bara en gång när appen startar
      auth.onAuthStateChanged(authUser => {
        console.log('USER IS >>>', authUser);

        if (authUser){
          //loggat in eller loggat ur
            dispatch({
              type: 'SET_USER',
              user: authUser
            })
        } else {
          //user is logged out
          dispatch({
            type: 'SET_USER',
            user: null
          })
        }
      })
  }, [])

  return (
    // BEM naming convension
    //länkar in sidorna
    <Router>
  <div className="App">
   
    <Switch>

    <Route path="/login">
   <Login/>
</Route>

<Route path="/payment">
<Header/> 
<Elements stripe={promise}>
<Payment />
</Elements>
</Route>

<Route path="/checkout">
<Header/> 
<Checkout/>
</Route>

<Route path="/">
<Header/> 
<Home />
      </Route>

    </Switch>
  </div>
</Router>
  
  );
}

export default App;
