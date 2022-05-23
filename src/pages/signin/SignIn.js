
import React from 'react';
import './SignIn.css';
import { Link } from 'react-router-dom';
import gmail_logo from '../../assets/icons/gmail_logo.svg';
import fb_logo from '../../assets/icons/fb_logo.svg';
import close from '../../assets/icons/close.svg';
const SignIn = () => {
	return (

		<div className='main_wrapper'>
				<div className='close_x'><img src={close} alt='close'></img></div>	
	<div class="wrapper">
		<div className='lightBlueSideBar'>
			<div className='lightBlueSignIn'>
				<Link to='/'>SIGN IN</Link>
			</div>
		<div className='lightBlueAviasatuu'>
			<Link to='/'>AviaSatuu</Link>
		</div>
		<div className='lightBlueLongText'>
			<Link to='/'>Access to support and pricing subscriptions</Link>
		</div>
		</div>
		<div className='rightWhiteSideBar'>

	<form className='formsReg'>
		<div className='joinText'>You can join with</div>
		<div className='logInGmFcb'>
		<div className='logInGmail'>
			<Link to="/">
				<img src={gmail_logo} alt="Login with Gmail" />
				<div className='reg_Gmail'>Login with Gmail</div>
			</Link>
		</div>
		<div className='LogIn_Facebook'>
			<Link to="/">
				<img src={fb_logo} alt="Login with Facebook" />
				<div className='reg_facebook'>Login with Facebook</div>
			</Link>
		</div>
		</div>
	
		<div className='formInput'>
		<input className='email_class' type="text" placeholder="Enter Your Email" name="email" required />
		<input className='password_class' type="password" placeholder="Enter Your Password" name="psw" required />
		</div>
	<div className='circle_remember'>	
    <label >
      <input type="checkbox" className='remember_text' name='remember' />
	  <span className='remember_me'>Remember me</span>
    </label>
  </div>
	  <div class="signup">
		  <button type="submit" class="signInBtn">Sign In</button></div>

		<div className='signUpAll'>
		  <div className='signUpText'>Don’t have an account?</div>
		 <div className='signUpP'><Link to="/">Sign Up</Link></div>
		
		</div>
	</form>
	</div>
	</div></div>
	)
};

export default SignIn;