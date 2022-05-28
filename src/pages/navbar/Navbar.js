import React from 'react'; 
import { Link } from 'react-router-dom'; 
import Account from './account/Account'; 
import Language from './language/Language'; 
import logo from '../../../src/assets/icons/logo.svg'; 
import './Navbar.css'; 
 
function Navbar() { 
 return ( 
  <nav className='navbar'> 
   <Link to='/'> 
    <img src={logo} alt='logo of the AviaSatuu Company' /> 
   </Link> 
   <div className='navbarLeft'> 
   <Account/> 
   <Language /> 
   </div> 
  </nav> 
 ); 
} 
export default Navbar;