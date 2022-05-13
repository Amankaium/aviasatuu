import React from 'react';
import { Link } from 'react-router-dom';
import planeIcon from '../../assets/icons/icon_plane.svg';
import './FlightsItem.css';

const FlightsItem = () => {
	return (
		<div className='flightsItem__inner'>
			<div className='flightsItem__times'>
				<p className='flightsItem__time sub-title'>
					<span className='caption-text'>FRU</span>
					05:50
				</p>
				<img src={planeIcon} alt='icon of the plane' />
				<p className='flightsItem__time sub-title'>
					<span className='caption-text'>NYC</span>
					17:05
				</p>
			</div>

			<p className='flightsItem__way caption-text'>1d 12h 50m</p>

			<div className='flightsItem__airlines'>
				<p className='flightsItem__airline'>Uzbekistan Airways</p>
				<p className='flightsItem__airline'>Air Traffic Company</p>
			</div>

			<p className='flightsItem__price'>778$</p>

			<Link className='fligthsItem-btn caption-text' to='/passengers'>
				Choose flight
			</Link>
		</div>
	);
};

export default FlightsItem;
