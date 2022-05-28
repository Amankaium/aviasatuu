import React, { useContext } from 'react';
import './PassengersList.css';
import PassengersItem from '../passengersitem/PassengersItem';
import PassengersTicket from '../passengersticket/PassengersTicket';
import FlightsContext from '../../FlightsContext';

const PassengersList = () => {
	const { additionalData } = useContext(FlightsContext);
	const adults = new Array(additionalData.adults).fill('Adult');
	const children = new Array(additionalData.children).fill('Child');
	const allPassengers = [...adults, ...children];

	return (
		<div className='passengers__inner'>
			<h1 className='passengers__title title'>Passengers info</h1>
			<div className='passengersItem-wrapper'>
				{allPassengers.map((item, index) => (
					<PassengersItem key={index} item={item} />
				))}
			</div>
			<PassengersTicket />
		</div>
	);
};

export default PassengersList;
