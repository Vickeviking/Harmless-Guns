import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Dashboard_Css/Login.css';
import logo from './img/Logo.gif';


function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const signIn = e => {
     e.preventDefault();
     //firebase login 
    }

    const register = e => {
        e.preventDefault();
        // firebase register
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

            <button onClick={register} className='login_registerButton'>Don't have an account?</button>
        </div>

  </div>
  );
}

export default Login;
