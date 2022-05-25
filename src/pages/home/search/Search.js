import React, {useState} from 'react';
import './Search.css';
import CountriesSearch from './searchcomps/countriesSearch/CountriesSearch';
import DatesSearch from './searchcomps/datesSearch/DatesSearch';
import PassengerSearch from './searchcomps/passengerSearch/PassengerSearch';

const Search = () => {
	
	return (
		<div className='search-panel'>
			<CountriesSearch />
			<DatesSearch />
			<PassengerSearch />
			<div>
				<button className='search-button'>Search</button>
			</div>
		</div>
	);
};

export default Search;
