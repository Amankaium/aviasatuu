import React, { useState } from 'react';
import './Home.css';
import Search from './search/Search';
import Slogan from './slogan/Slogan';

const Homepage = () => {
	const filters = {};
	const onChange=(e) => {
		console.log()
	}

	return <div>
		<Search onChange/>
		<Slogan />
	</div>;
};

export default Homepage;
