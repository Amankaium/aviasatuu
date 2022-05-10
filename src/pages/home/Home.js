import React from 'react';
import './Home.css';
import Search from './search/Search';
import Slogan from './slogan/Slogan';

const Homepage = () => {
	return <div>
		<Search/>
		<Slogan />
	</div>;
};

export default Homepage;
