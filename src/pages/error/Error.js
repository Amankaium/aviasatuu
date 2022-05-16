import React from 'react';
import { Link } from 'react-router-dom';
import './Error.css';

const Error = () => {
	return (
		<div className='error'>
			<div className='error__inner'>
				<div className='error__content'>
					<h1 className='error__title title'>Page not found</h1>
					<p className='error__text text'>
						The requested URL was not found <br /> on this server
					</p>
				</div>
				<div className='error__img'></div>
			</div>
			<div className='error__btn-wrapper'>
				<button className='error__btn text'>
					<Link to='/'>Back to the homepage</Link>
				</button>
			</div>
		</div>
	);
};

export default Error;
