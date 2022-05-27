import { createContext, useState, useEffect } from 'react';
const FlightsContext = createContext();

export function FlightsProvider({ children }) {
	const [flights, setFlights] = useState([]);
	const getFlight = () => {
		fetch('http://kaiaman.pythonanywhere.com/api/aviasatuu/flights/')
			.then(response => response.json())
			.then(data => setFlights(data));
	};

	useEffect(getFlight, []);

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
	//* Renders the filtered ones from api, but I don't know how to manage other parameters and filtered them out. Maybe there is a way to do it. Maybe add another useState for filtered list, but how to manage it?

	return (
		<FlightsContext.Provider value={{ flights, code_city_maker, getDateHours }}>
			{children}
		</FlightsContext.Provider>
	);
}
export default FlightsContext;
