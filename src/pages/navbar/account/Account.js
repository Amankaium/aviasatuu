import React from 'react'; 
import './Account.css'; 
import AccountMenu from './AccountMenu'; 
 
function Account(props) { 
 return ( 
  <> 
   <AccountMenu setLoginState={props.setLoginState} /> 
  </> 
 ); 
} 
 
export default Account;
