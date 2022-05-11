import React from 'react';
import './Navbar.css';
import LanguageMenu from './language/LanguageMenu.jsx';
import AccountMenu from './account/AccountMenu.jsx';


const Navbar = () => {
	render (
		<AccountMenu />
		<LanguageMenu />
	);
};

export default Navbar;
