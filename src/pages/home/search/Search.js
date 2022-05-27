import React, { useState, useEffect, useContext } from 'react';
import './Search.css';
import CountriesSearch from './searchcomps/countriesSearch/CountriesSearch';
import DatesSearch from './searchcomps/datesSearch/DatesSearch';
import PassengerSearch from './searchcomps/passengerSearch/PassengerSearch';
import { useNavigate } from 'react-router-dom';
import FlightsContext from '../../../FlightsContext';

const Search = () => {
	const navigate = useNavigate();

	const [filter, setFilter] = useState({});
	const [error, setError] = useState('');
	const [citiesFrom, setCitiesFrom] = useState([]);
	const [citiesTo, setCitiesTo] = useState([]);

	const { additionalData, setAdditionalData } = useContext(FlightsContext);

	const getList = () => {
		fetch('https://kaiaman.pythonanywhere.com/api/aviasatuu/flights/')
			.then(response => response.json())
			.then(json => {
				const citiesFrom = new Set(
					json.map(item => {
						return item.from_city;
					})
				);
				const citiesTo = new Set(
					json.map(item => {
						return item.to_city;
					})
				);
				setCitiesFrom([...citiesFrom]);
				setCitiesTo([...citiesTo]);
			});
	};
	const goToFlights = () => {
		if (!filter.from_city || !filter.to_city || !filter.start || !filter.end ||
			!additionalData.adults) {
			setError(' *Please, fill in all input fields ')
			return;
		}
		navigate('/flights', { state: { filter, additionalData } });
	};

	useEffect(getList, []);

	const handleFilters = data => {
		setFilter({ ...filter, ...data });
	};

	const handleAddData = data => {
		setAdditionalData({ ...additionalData, ...data });
	};
	console.log(filter);

	return (
		<div className='search__panel'>
			<CountriesSearch handleFilters={handleFilters} citiesFrom={citiesFrom} citiesTo={citiesTo} />
			<DatesSearch handleFilters={handleFilters} />
			<PassengerSearch handleAddData={handleAddData} />
			<div>
				<button 
				onClick={goToFlights}
				className='search__button'>Search</button>
			</div>
			{error && <div className='error__fill'>{error}</div>}
		</div>
	);
};

export default Search;
