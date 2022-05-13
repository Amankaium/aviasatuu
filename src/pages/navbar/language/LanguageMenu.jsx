import React from 'react';
import lang from '../../../assets/icons/lang.svg';
import KG from '../../../assets/icons/KG.svg';
import RU from '../../../assets/icons/RU.svg';
import EN from '../../../assets/icons/EN.svg';
import { Link } from 'react-router-dom';
import './Language.css';

function LanguageMenu() {
	return (
		<div className='langImg'>
			<Link to='/' className='langLogo'>
				<img src={lang} alt='' />
			</Link>
			<div className='langContent'>
				<Link to='/' className='kg'>
					<img src={KG} alt='' />{' '}
				</Link>
				<Link to='/' className='eng'>
					{' '}
					<img src={EN} alt='' />
				</Link>
				<Link to='/' className='rus'>
					{' '}
					<img src={RU} alt='' />
				</Link>
			</div>
		</div>
	);
}
export default LanguageMenu;
