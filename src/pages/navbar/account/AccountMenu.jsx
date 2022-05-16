import React from 'react';
import Vector from '../../../assets/icons/Vector.svg';
import settings from '../../../assets/icons/settings.svg';
import documents from '../../../assets/icons/documents.svg';
import ticket from '../../../assets/icons/ticket.svg';
import { Link } from 'react-router-dom';
import './Account.css';

function AccountMenu() {
	return (
		<div className='vectorImg'>
			<Link to='/' className='accountLogo'>
				<img src={Vector} alt='' />

			</Link>
			<div className='accountContent'>
				<Link to='/' className='settings'>
					<img src={settings} alt='' />{' '}
				</Link>
				<Link to='/' className='documents'>
					{' '}
					<img src={documents} alt='' />
				</Link>
				<Link to='/' className='ticket'>
					{' '}
					<img src={ticket} alt='' />
				</Link>
				<Link to='/'>
					<button className='menu-btn'>Sign In</button>
				</Link>
			</div>
		</div>
	);
}
export default AccountMenu;
