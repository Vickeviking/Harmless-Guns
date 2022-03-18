import React, { useEffect, useState } from 'react';
import './Dashboard_Css/Orders.css'
import { db } from './firebase';
import { useStateValue } from './StateProvider';
import Order from './Order';

function Orders() {
  const [{ basket, user }, dispatch] = useStateValue();
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    if(user) {
        db
        .collection('users') //letar bland användare
        .doc(user?.uid)
        .collection('orders') //letar bland orders
        .orderBy('created', 'desc')  // sortera efter datum från nya till gammla
        .onSnapshot(snapshot => (
            setOrders(snapshot.docs.map(doc => ({  //går igenom alla orders och läggar in dem i array
                id: doc.id,
                data: doc.data()
            })))
        ))
    } else {
        setOrders([])
    }

  }, [user])

  const [isActive, setActive] = useState("false");  /*Här kollar vi om användaren är inloggad*/
   const handleToggle = () => { 
    setActive(!isActive);
   }

  return(
      <div className='orders'>
        <h1>{user ? 'Your orders' : ' login to see your orders!'}</h1>
        <div className='orders_order'>
            {orders?.map(order => (
              <Order order={order} /> 
            ))}
        </div>

      </div>
  )
}

export default Orders;
