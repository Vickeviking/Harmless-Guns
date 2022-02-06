import React, { useState } from 'react';
import { Link, useHistory} from 'react-router-dom';
import './Dashboard_Css/Login.css';
import logo from './img/Logo.gif';
import {auth} from './firebase';


function Login() {
    const history = useHistory();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const signIn = e => {
     e.preventDefault();
    
     auth.signInWithEmailAndPassword(email, password)
     .then(auth => {
         history.push('/')
     })
     .catch(error => alert(error.message))

    }

    const register = e => {
        e.preventDefault();

        auth.createUserWithEmailAndPassword(email, password)
            .then((auth) => {
                // it successfully created a new user with email and password
              if(auth){
                  history.push('/')
              }
            })
            .catch(error => alert(error.message))
       }

  return( 
  <div className='login'>

      <Link to="/">
        
         <img className='login_logo' src={logo}/>

      </Link>
      
        <div className='login_container'>
            <h1>Sign-In</h1>

            <form action="">
                <h5>E-mail</h5>
                <input type="text" value={email} onChange=
                {e => setEmail(e.target.value)} />

                <h5>Password</h5>
                <input type="password" value={password}
                onChange={e => setPassword(e.target.value)} />

                <button  type="submit" onClick={signIn} className='login_signInButton'>Sign In</button>
            </form>

            <p>
                By Signing-in you agree to Harmless Guns Terms & Consitions, Please note that all guns are props and should not be used as other
            </p>

            <button onClick={register} className='login_registerButton'>Create your Account</button>
        </div>

  </div>
  );
}

export default Login;
