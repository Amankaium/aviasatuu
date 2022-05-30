import React, { useState, useEffect, useContext } from 'react';
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';
import FlightsContext from '../../FlightsContext';
import planeIcon from '../../assets/icons/icon_plane.svg';
import FlightsItem from '../../components/flightsitem/FlightsItem';
import './Flights.css';

const Flights = () => {
	const location = useLocation();
	const { from_city, to_city } = location.state.filter;
	console.log(location);
	const [flights, setFlights] = useState([]);
	const getFlight = () => {
		fetch('http://kaiaman.pythonanywhere.com/api/aviasatuu/flights/')
			.then(response => response.json())
			.then(json => {
				const filteredList = json.filter(
					item => from_city === item.from_city && to_city === item.to_city
					//&&fn(start)===item.start && fn(end)===item.end
				);
				setFlights(filteredList);
			});
	};
	// console.log(flights);

	useEffect(() => {
		getFlight();
	}, []);

	const { code_city_maker, additionalData } = useContext(FlightsContext);
	const { adults, children } = additionalData;

	return (
		<div className='flightsList-inner'>
			<header className='flights-header'>
				<h1 className='title flights__title'>
					<span className='text flights__title-descr'>
						{code_city_maker(from_city)}
					</span>
					{from_city}
				</h1>
				<img className='flights-header__img' src={planeIcon} alt='plane icon' />
				<h1 className='title flights__title'>
					<span className='text flights__title-descr'>
						{code_city_maker(to_city)}
					</span>
					{to_city}
				</h1>
			</header>

			<div className='description'>
				<Link to='/' className='description__input description__item'>
					31.05.2022
				</Link>
				<p className='text description__text description__item'>One-way</p>
				<p className='text description__text description__item'>
					{adults} adult{adults > 1 && 's'} - {children} child
					{children > 1 && 'ren'}
				</p>
				<p className='text description__text description__item'>Economy</p>
				<select className='flights-variants__select text description__item'>
					<option value=''>Sort by price</option>
					<option value='recommended'>Recommended first</option>
					<option value='cheap'>Cheap first</option>
					<option value='popular'>Popular</option>
				</select>
			</div>

			<div className='flights-variants'>
				<div className='flights-variants__title'>
					<ul className='flights-variants__list'>
						<li className='flights-variants__item caption-text'>Departure</li>
						<li className='flights-variants__item caption-text'>Arrival</li>
						<li className='flights-variants__item caption-text'>On way</li>
						<li className='flights-variants__item caption-text'>Airlines</li>
						<li className='flights-variants__item caption-text'>Price</li>
					</ul>
				</div>
			</div>
			{flights &&
				flights.map((flight, index) => (
					<FlightsItem
						key={index}
						{...flight}
						adults={adults}
						children={children}
					/>
				))}
		</div>
	);
};

export default Flights;
