import React from 'react';

import './PassengersItem.css';

const PassengersItem = ({ item }) => {
	return (
		<form className='passengersItem__form'>
			<div className='passengersItem__form-top'>
				<p className='passengersItem__form-title text'>{`${item} passenger`}</p>
			</div>

			<div className='passengersItem_form-main'>
				<div className='form__input-inner'>
					<label className='label__name label' htmlFor='name'>
						Name
					</label>
					<input className='input__name input text' type='text' id='name' />
				</div>

				<div className='form__input-inner'>
					<label className='label__surname label' htmlFor='surname'>
						Surname
					</label>
					<input
						className='input__surname input text'
						type='text'
						id='surname'
					/>
				</div>

				<div className='form__input-inner'>
					<label className='label__gender label' htmlFor='gender'>
						Gender
					</label>
					<select className='gender__select input text' id='gender'>
						<option value=''></option>
						<option value='male'>Male</option>
						<option value='female'>Female</option>
						<option value='other'>Other</option>
					</select>
				</div>

				<div className='form__input-inner'>
					<label className='label__date label' htmlFor='date'>
						Date of the birth
					</label>
					<input
						className='input__date input text'
						type='date'
						name='date'
						id='date'
					/>
				</div>

				<div className='form__input-inner'>
					<label className='label__document-type label' htmlFor='document-type'>
						Document type
					</label>
					<select className='gender__select' id='document-type'>
						<option value=''></option>
						<option value='male'>Passport</option>
						<option value='female'>Birth certificate</option>
					</select>
				</div>

				<div className='form__input-inner'>
					<label
						className='label__document-number label'
						htmlFor='document-number'>
						Document number
					</label>
					<input
						className='input__document-number input text'
						type='number'
						id='document-number'
					/>
				</div>

				<div className='form__input-inner'>
					<label className='label__phone-number label' htmlFor='phone-number'>
						Phone number (optional)
					</label>
					<input
						className='input__phone input text'
						type='tel'
						id='phone-number'
					/>
				</div>

				<div className='form__input-inner'>
					<label className='label__email label' htmlFor='email'>
						E-mail (optional)
					</label>
					<input className='input__email input text' type='e-mail' id='email' />
				</div>
			</div>
		</form>
	);
};

export default PassengersItem;
