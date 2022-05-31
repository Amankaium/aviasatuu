
import React, { useEffect, useState, useContext } from 'react';
import './SignUp.css';
import { Link } from 'react-router-dom';
import gmail_logo from '../../assets/icons/gmail_logo.svg';
import fb_logo from '../../assets/icons/fb_logo.svg';
import axios from 'axios';
import FlightsContext from '../../FlightsContext';





const SignUp = (event) => {
  const [userName, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [token, setToken] = useState('');
  const { isRegister, setIsRegister } = useContext(FlightsContext);

  function jetToken() {
    axios
    .post('http://kaiaman.pythonanywhere.com/api/registration', {
      username: userName,
      password: password,
     
    })
    .then(function (response) {
      console.log(response);
      setToken(response.data.key);
      setIsRegister(true);
    })
    .catch(function (error) {
      console.log(error);
    });
}
  
  return (
    <div className='main_conteiner'>
      <div class='conteiner'>
        <div className='blueSideBar'>
          <div className='blueSignUp'>
            <Link to='../../signup'>SIGN UP</Link>
          </div>
          <div className='blueAviasatuu'>
            <Link to='/'>AviaSatuu</Link>
          </div>
          <div className='blueLongText'>
            <Link to='/'>
              Access to support and <br /> pricing subscriptions
            </Link>
          </div>
        </div>
        <div className='whiteSideBar'>
          {isRegister ? (
            <div className='rotate_body'>
            <em className='planet left'> You are </em>
            <em className='planet right'>logged in</em>
          </div>
          ) : (
            <form className='formReg'>
            <div className='join_text'>You can join with</div>
            <div className='loggmfcb'>
              <div className='logIngmail'>
                <Link className='logIngmailLink' to='/'>
                  <img src={gmail_logo} alt='Login with Gmail' />
                  <div className='regGmail'>Login with Gmail</div>
                </Link>
              </div>
              <div className='LogInFacebook'>
                <Link className='LogInFacebookLink' to='/'>
                  <img src={fb_logo} alt='Login with Facebook' />
                  <div className='regfacebook'>Login with Facebook</div>
                </Link>
              </div>
            </div>

            <div className='form_input'>
              <input
                className='email_cl'
                type='text'
                placeholder='Enter Your Email'
                name='userName'
                value={userName}
                onChange={e => setUsername(e.target.value)}
                required
              />

              <input
                className='password_cl'
                type='password'
                placeholder='Enter Your Password'
                name='psw'
                value={password}
                onChange={e => setPassword(e.target.value)}
                required
              />

              <input
                className='password_cl'
                type='password'
                placeholder='Repeat Your Password'
                name='psw-repeat'
                required
              />
            </div>
            <div className='circle_rem'>
              <label>
                <input type='checkbox' className='remember' name='remember' />

                <span className='rememberMe'>Remember me</span>
              </label>
            </div>
            <div class='signin'>
              <button type='button' onClick={jetToken} class='signUpBtn'>
                Sign Up
              </button>
            </div>

            <div className='signInAll'>
              <div className='signInText'>Already have an account?</div>
              <div className='signinP'>
                <Link to='../../signin'>Sign In</Link>
              </div>
            </div>
          </form>
          
          )}
         
        </div>
      </div>
    </div>
  );
};

export default SignUp;