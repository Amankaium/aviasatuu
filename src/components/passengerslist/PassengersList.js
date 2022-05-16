import React from 'react';
import './PassengersList.css';
import PassengersItem from '../passengersitem/PassengersItem';
import PassengersTicket from '../passengersticket/PassengersTicket';

const PassengersList = () => {
	return (
		<div className='container'>
			<div className='passengers__inner'>
				<h1 className='passengers__title title'>Passengers info</h1>
				<div className='passengersItem-wrapper'>
					<PassengersItem />
					<PassengersItem />
					<PassengersItem />
					<PassengersItem />
				</div>
			</div>
		</div>
	);
};

export default PassengersList;
