import React from 'react';
import './Search.css';
import CountrySearch from './searchcomps/CountrySearch.js';
import DateSearch from './searchcomps/DateSearch';
import PassengerSearch from './searchcomps/PassengerSearch';

const Search = () => {
	return (
		<div className='search-panel'>
			<CountrySearch />
			<CountrySearch />
			<DateSearch />
			<DateSearch />
			<PassengerSearch />
			<div>
				<button className='search-button'>Search</button>
			</div>
		</div>
	);
};

export default Search;
