import React from 'react';
import './SignUp.css';
import { Link } from 'react-router-dom';
import gmail_logo from '../../assets/icons/gmail_logo.svg';
import fb_logo from '../../assets/icons/fb_logo.svg';
import close from '../../assets/icons/close.svg';

const SignUp = () => {
	return (
		<div className='main_conteiner'>
			<div className='close'>
				<img src={close} alt='close'></img>
			</div>
			<div class='conteiner'>
				<div className='blueSideBar'>
					<div className='blueSignUp'>
						<Link to='../../signup'>SIGN UP</Link>
					</div>
					<div className='blueAviasatuu'>
						<Link to='/'>AviaSatuu</Link>
					</div>
					<div className='blueLongText'>
						<Link to='/'>Access to support and pricing subscriptions</Link>
					</div>
				</div>
				<div className='whiteSideBar'>
					<form className='formReg'>
						<div className='join_text'>You can join with</div>
						<div className='loggmfcb'>
							<div className='logIngmail'>
								<Link to='/'>
									<img src={gmail_logo} alt='Login with Gmail' />
									<div className='regGmail'>Login with Gmail</div>
								</Link>
							</div>
							<div className='LogInFacebook'>
								<Link to='/'>
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
								name='email'
								required
							/>

							<input
								className='password_cl'
								type='password'
								placeholder='Enter Your Password'
								name='psw'
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
							<button type='submit' class='signUpBtn'>
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
				</div>
			</div>
		</div>
	);
};

export default SignUp;
