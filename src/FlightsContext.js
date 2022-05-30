import { createContext, useState } from 'react';
const FlightsContext = createContext();

export function FlightsProvider({ children }) {
	const [additionalData, setAdditionalData] = useState({
		adults: 0,
		children: 0,
		babies: 0,
		class: 'Economy',
	});

	const code_city_maker = city => {
		switch (city) {
			case 'Bishkek':
				return 'Fru';
			case 'Moscow':
				return 'SVO';
			case 'Osh':
				return 'OSS';
			case 'Berlin':
				return 'BER';
			case 'Baku':
				return 'BAK';
			case 'Seoul':
				return 'ICN';
			case 'Pekin':
				return 'PEK';
			default:
				return 'FRU';
		}
	};

	const getDateHours = date => {
		let dateHours = new Date(date).getHours();
		if (dateHours < 10) {
			dateHours = `0${dateHours}`;
		}
		let dateMinutes = new Date(date).getMinutes();
		if (dateMinutes < 10) {
			dateMinutes = `0${dateMinutes}`;
		}
		return `${dateHours}:${dateMinutes}`;
	};

	const durationMaker = duration => {
		const hours = Math.floor(duration / 60);
		const minutes = duration % 60;
		return `${hours > 0 ? `${hours}h` : ''} ${minutes}m `;
	};

	const priceSum = (price, adult, child) => {
		return price * adult + price * child * 0.5;
	};

	return (
		<FlightsContext.Provider
			value={{
				// flights,
				code_city_maker,
				getDateHours,
				durationMaker,
				additionalData,
				setAdditionalData,
				priceSum,
			}}>
			{children}
		</FlightsContext.Provider>
	);
}
export default FlightsContext;
