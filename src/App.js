import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './pages/home/Home';
import Flights from './pages/flights/Flights';
import Passengers from './pages/passengers/Passengers';
import Error from './pages/error/Error';
import CheckoutPage from './pages/checkoutpage/CheckoutPage';
import SignIn from './pages/signin/SignIn';
import SignUp from './pages/signup/SignUp';
import Navbar from './pages/navbar/Navbar';


// import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
	return (
		<div className='container'>
			<Router>
				<Navbar /> 
				
				
				<Routes>
					<Route path='/' element={<App />} />
					<Route index element={<Home />} />
					<Route path='flights' element={<Flights />} />
					<Route path='passengers' element={<Passengers />} />
					<Route path='checkout' element={<CheckoutPage />} />
					<Route path='signin' element={<SignIn />} />
					<Route path='signup' element={<SignUp />} />
					<Route path='*' element={<Error />} />
				</Routes>
			</Router>
		</div>
	);
}

export default App;
