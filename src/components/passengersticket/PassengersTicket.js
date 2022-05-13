import React from 'react';
import { Link } from 'react-router-dom';
import planeIcon from '../../assets/icons/icon_plane.svg';
import './PassengersTicket.css';

const PassengersTicket = () => {
	return (
		<div className='passengersTicket'>
			<div className='passengersTicket__left'>
				<header className='passengersTicket__header'>
					<h1 className='title passengersTicket__title'>
						<span className='text passengersTicket__title-descr'>FRU</span>
						Bishkek
					</h1>
					<img
						className='passengersTicket-header__img'
						src={planeIcon}
						alt='plane icon'
					/>
					<h1 className='title passengersTicket__title'>
						<span className='text passengersTicket__title-descr'>NYC</span>
						New-York
					</h1>
				</header>
				<ul className='passengersTicket__list'>
					<li className='passengersTicket__item caption-text'>
						<p className='passengersTicket__item-title'>Air Traffic</p>
						Airbus A228
					</li>

					<li className='passengersTicket__item caption-text'>
						<p className='passengersTicket__item-title'>Date</p>
						12.05.2022
					</li>

					<li className='passengersTicket__item caption-text'>
						<p className='passengersTicket__item-title'>Time</p>
						Economy
					</li>

					<li className='passengersTicket__item caption-text'>
						<p className='passengersTicket__item-title'>On way</p>
						1d 12h 50m
					</li>
				</ul>
			</div>

			<div className='passengersTicket__right'>
				<h1 className='title passengersTicket__title passengersTicket__right-title'>
					<span className='text passengersTicket__title-descr'>Total</span>3
					877$
				</h1>

				<Link
					className='passengersTicket__right-btn caption-text'
					to='/checkout'>
					Book and proceed to payment
				</Link>
			</div>
		</div>
	);
};

export default PassengersTicket;
