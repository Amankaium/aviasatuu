import React from 'react';
import planeIcon from '../../assets/icons/icon_plane.svg';
import arrowDownCalendar from '../../assets/icons/arrow-down-calendar.svg';
import FlightsItem from '../flightsitem/FlightsItem';
import './FlightsList.css';

const FlightsList = () => {
	return (
		<div className='container'>
			<div className='flightsList-inner'>
				<header className='flights-header'>
					<h1 className='title flights__title'>
						<span className='text flights__title-descr'>FRU</span>Bishkek
					</h1>
					<img
						className='flights-header__img'
						src={planeIcon}
						alt='plane icon'
					/>
					<h1 className='title flights__title'>
						<span className='text flights__title-descr'>NYC</span>New-York
					</h1>
				</header>

				<div className='description'>
					<div className='description__input'>
						<label className='description__date-label' htmlFor='date'>
							<img
								className='description__date-img'
								src={arrowDownCalendar}
								alt='icon to view calendar'
							/>
						</label>
						<input
							className='description__date'
							type='date'
							name='date'
							id='date'
						/>
					</div>
					<p className='text description__text'>One-way</p>
					<p className='text description__text'>2 adult - 2 children</p>
					<p className='text description__text'>Economy</p>
				</div>

				<div className='flights-variants'>
					<div className='flights-variants__title'>
						<ul className='flights-variants__list'>
							<li className='flights-variants__item caption-text'>Departure</li>
							<li className='flights-variants__item caption-text'>Arival</li>
							<li className='flights-variants__item caption-text'>One way</li>
							<li className='flights-variants__item caption-text'>Airlines</li>
							<li className='flights-variants__item caption-text'>Price</li>
							<li className='flights-variants__item caption-text'>
								<select className='flights-variants__select'>
									<option value=''>Sort by price</option>
									<option value='recommended'>Recommended first</option>
									<option value='cheap'>Cheap first</option>
									<option value='popular'>Popular</option>
								</select>
							</li>
						</ul>
					</div>
				</div>
				<FlightsItem />
				<FlightsItem />
				<FlightsItem />
				<FlightsItem />
				<FlightsItem />
			</div>
		</div>
	);
};

export default FlightsList;
