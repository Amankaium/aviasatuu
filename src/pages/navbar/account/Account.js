import React from 'react';
import './Account.css';
// import Vector from '../../../src/assets/icons/Vector.svg';

const Account = ({ active, setActive, children }) => {
	return (
		<div
			className={active ? 'modal active' : 'modal'}
			onClick={() => setActive(false)}>
			<div
				className={active ? 'modal__content' : 'modal__content'}
				onClick={e => e.stopPropagation()}>
				{children}
			</div>
		</div>
	);
};

export default Account;
