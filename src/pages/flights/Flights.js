import { React, useEffect, useState } from 'react';
import FlightsList from '../../components/flightslist/FlightsList';
import { useLocation} from 'react-router-dom';

const Flights = () => {
	const location = useLocation();
	const [list, setList] = useState([])
	console.log(location)
	const getList = () => {
		fetch("https://kaiaman.pythonanywhere.com/api/aviasatuu/flights/")
		.then(response => response.json())
		.then(json => {
			// TODO: make filter work by example from_city
			const filteredList = json.filter(item => location.state.filter.from_city === item.from_city)
			setList(filteredList)
		})
	}
  
	useEffect(getList, [])

	return <FlightsList flights={list} />;
};

export default Flights;
