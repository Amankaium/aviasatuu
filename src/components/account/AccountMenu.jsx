import React from 'react';
import { useState } from 'react';
import Account from './Account';
import Vector from '../../assets/icons/Vector.svg';
import settings from '../../assets/icons/settings.svg';
import documents from '../../assets/icons/documents.svg';
import ticket from '../../assets/icons/ticket.svg';
import { Link } from 'react-router-dom';
import './Account.css';


function AccountMenu() {
	const [modalActive, setModalActive] = useState(true)
	return (
		<div className='container'>
			<img className='vector' src={Vector} onClick={() =>  setModalActive(true)} />
			<Account  active={modalActive} setActive={setModalActive}>
                <div className='account_menu'>
				<Link to="/" className='settings' ><img src={settings} alt=""/> Settings</Link>
				<Link to="/" className='documents'> <img src={documents} alt=""/>Documents</Link>
				<Link to="/" className='ticket'> <img src={ticket} alt=""/> Ticket</Link>
                <button className='menu-btn'>Sign In</button>
                </div>
			</Account>
            </div>
	);
}

export default AccountMenu;