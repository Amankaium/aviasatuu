import React, { useState} from 'react'; 
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
 
export const loginContext = React.createContext(false) 
 
 
function App() { 
 
 const [loginState, setLoginState] = useState(false) 
 return ( 
  <div className='container'> 
   <loginContext.Provider value={loginState}> 
      
     
 
   <Router> 
    <Navbar setLoginState={setLoginState} /> 
    <Routes> 
     <Route path='/' element={<App />} /> 
     <Route index element={<Home />} /> 
     <Route path='flights' element={<Flights />} /> 
     <Route path='passengers' element={<Passengers />} /> 
     <Route path='/checkout' element={<CheckoutPage />} /> 
     <Route path='signin' element={<SignIn setLoginState={setLoginState}/>} /> 
     <Route path='signup' element={<SignUp />} /> 
     <Route path='*' element={<Error />} /> 
    </Routes> 
   </Router> 
   </loginContext.Provider> 
  </div> 
 ); 
} 
 
export default App;