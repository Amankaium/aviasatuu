import React from 'react';
import { useState } from 'react';
import Language from './Language';
import lang from '../../../assets/icons/lang.svg';
import './Language.css';
import { Link } from 'react-router-dom';

function LanguageMenu() {
	const [modalActive, setModalActive] = useState(true);
	return (
		<div className='container'>
			<img
				className='vector_lang'
				src={lang}
				onClick={() => setModalActive(true)}
			/>
			<Language active={modalActive} setActive={setModalActive}>
				<div className='language_menu'>
					<div className='kgz'>KGZ</div>
					<div className='eng'>ENG</div>
					<div className='rus'>Rus</div>
				</div>
			</Language>
		</div>
	);
}

export default LanguageMenu;
