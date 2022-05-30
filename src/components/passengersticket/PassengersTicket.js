import React, { useContext } from 'react';
import { Link, useLocation } from 'react-router-dom';
import FlightsContext from '../../FlightsContext';
import planeIcon from '../../assets/icons/icon_plane.svg';
import './PassengersTicket.css';

const PassengersTicket = () => {
	const location = useLocation();
	const { from_city, to_city, price, adults, children, aviacompany, duration } =
		location.state;
	const { code_city_maker, durationMaker, priceSum } =
		useContext(FlightsContext);

	console.log(location);
	return (
		<div className='passengersTicket'>
			<div className='passengersTicket__left'>
				<header className='passengersTicket__header'>
					<h1 className='title passengersTicket__title'>
						<span className='text passengersTicket__title-descr'>
							{code_city_maker(from_city)}
						</span>
						{from_city}
					</h1>
					<img
						className='passengersTicket-header__img'
						src={planeIcon}
						alt='plane icon'
					/>
					<h1 className='title passengersTicket__title'>
						<span className='text passengersTicket__title-descr'>
							{code_city_maker(to_city)}
						</span>
						{to_city}
					</h1>
				</header>
				<ul className='passengersTicket__list'>
					<li className='passengersTicket__item caption-text'>
						<p className='passengersTicket__item-title'>Air Company</p>
						{aviacompany}
					</li>

					<li className='passengersTicket__item caption-text'>
						<p className='passengersTicket__item-title'>Date</p>
						31.05.2022
					</li>

					<li className='passengersTicket__item caption-text'>
						<p className='passengersTicket__item-title'>Class</p>
						Economy
					</li>

					<li className='passengersTicket__item caption-text'>
						<p className='passengersTicket__item-title'>On way</p>
						{durationMaker(duration)}
					</li>
				</ul>
			</div>

			<div className='passengersTicket__right'>
				<h1 className='title passengersTicket__title passengersTicket__right-title'>
					<span className='text passengersTicket__title-descr'>Total</span>
					{`${priceSum(price, adults, children)
						.toFixed(2)
						.replace(/\d(?=(\d{3})+\.)/g, '$& ')}$`}
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
