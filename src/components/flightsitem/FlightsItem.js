import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import FlightsContext from '../../FlightsContext';
import planeIcon from '../../assets/icons/icon_plane.svg';
import './FlightsItem.css';

const FlightsItem = ({
	aviacompany,
	duration,
	from_city,
	to_city,
	start,
	end,
	price,
}) => {
	const { code_city_maker, getDateHours } = useContext(FlightsContext);
	return (
		<div className='flightsItem__inner'>
			<div className='flightsItem__times flightsItem__inner-element'>
				<p className='flightsItem__time sub-title'>
					<span className='caption-text'>{code_city_maker(from_city)}</span>
					{getDateHours(new Date(start))}
				</p>
				<img src={planeIcon} alt='icon of the plane' />
				<p className='flightsItem__time sub-title'>
					<span className='caption-text'>{code_city_maker(to_city)}</span>
					{getDateHours(new Date(end))}
				</p>
			</div>

			<p className='flightsItem__way caption-text flightsItem__inner-element'>
				1d 12h 50m
			</p>

			<div className='flightsItem__airlines flightsItem__inner-element'>
				<p className='flightsItem__airline'>{aviacompany}</p>
			</div>

			<p className='flightsItem__price flightsItem__inner-element'>{`${price
				.toFixed(2)
				.replace(/\d(\d{3})+\)/g, '$& ')}$`}</p>

			<Link
				className='fligthsItem-btn caption-text flightsItem__inner-element'
				to='/passengers'>
				Choose flight
			</Link>
		</div>
	);
};

export default FlightsItem;
