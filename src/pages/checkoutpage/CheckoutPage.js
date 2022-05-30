import React from 'react';
import { Link } from 'react-router-dom';

import './CheckoutPage.css';

import BgImg from '../../assets/images/picture.jpg';

const CheckoutPage = () => {
	return (
		<div className='checkout_content'>
			<div className='checkout__wrapper'>
				<div className='payment_form'>
					<h1>Payment by credit card</h1>
					<div className='payment_form_content_wrapper'>
						<form className='payment_form_content'>
							<ul>
								<li>
									<div className='field-credit_card'>
										<label for='field1'>Credit card number</label>
										<br />
										<input
											type='number'
											name='field1'
											className='field-style field-split align-left'
											placeholder='4839 0483 7888 9377'
										/>
									</div>
									<div className='field-cvc'>
										<label for='field2'>cvc/cvv</label>
										<br />
										<input
											type='number'
											name='field2'
											className='field-style field-split align-right'
											placeholder='035'
										/>
									</div>
								</li>
								<div class="stroka">
								<li>
									<div className='field-month '>
										<label for='field3'>Expiry month</label>
										<br />
										{/* <input type="month" name="field3" className="field-style field-split align-left" placeholder="December" /> */}
										<select name='field3'>
											{/* <option value="0">Select car:</option> */}
											<option value='1'>January</option>
											<option value='2'>February</option>
											<option value='3'>March</option>
											<option value='4'>April</option>
											<option value='5'>May</option>
											<option value='6'>June</option>
											<option value='7'>July</option>
											<option value='8'>August</option>
											<option value='9'>September</option>
											<option value='10'>October</option>
											<option value='11'>November</option>
											<option value='12'>December </option>
										</select>
									</div>
								</li>
								<li>
									<div className='field-year'>
										<label for='field4'>Expire year</label>
										<br />
										<input
											type='number'
											name='field4'
											class='field-style field-split align-right'
											placeholder='2025'
										/>
									</div>
								</li>
								</div>
								
								<li>
									<div className='field-card_holder'>
										<label for='field3'>Card holder’s name</label>
										<br />
										<input
											type='text'
											name='field3'
											className='field-style field-full align-none'
											placeholder='Atambaev Almazbek'
										/>
									</div>
								</li>
								<li>
									<div className='email'>
										<label for='field5'>E-mail</label>
										<br />
										<input
											type='E-mail'
											name='field5'
											class=' field-style field-full align-none'
											placeholder='Atambaev.A@gmail.com'
										/>
									</div>
								</li>
								<li>
									<div className='checkbox'>
										<input
											type='checkbox'
											name='field6'
											class=' field-style field-full align-none'
											placeholder='Remember card for payment next time'
										/>
										<h6> Remember card for payment next time</h6>
									</div>
								</li>
								<li>
									<div>
										<Link to='/passengers'>
											<button type='button' className='btn'>
												{' '}
												Back
											</button>{' '}
										</Link>
										<input type='submit' value='Pay now' className='submit' />
									</div>
								</li>
							</ul>
						</form>
					</div>
				</div>
				<div className='payment_picture'>
					<img src={BgImg} alt='' />
				</div>
				
			</div>
		</div>
	);
};

export default CheckoutPage;
