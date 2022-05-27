import React, { useEffect, useState, useContext } from "react"; 
import "./SignIn.css"; 
import { Link } from "react-router-dom"; 
import {loginContext} from '../../App'; 
import gmail_logo from "../../assets/icons/gmail_logo.svg"; 
import fb_logo from "../../assets/icons/fb_logo.svg"; 
import close from "../../assets/icons/close.svg"; 
import axios from "axios"; 
 
const SignIn = (props) => { 
  const [userName, setUsername] = useState(""); 
  const [password, setPassword] = useState(""); 
  const [token, setToken] = useState(""); 
  const login = useContext(loginContext); 
 
  function getToken() { 
    axios 
      .post("http://kaiaman.pythonanywhere.com/api/login", { 
        username: userName, 
        password: password, 
      }) 
      .then(function (response) { 
        console.log(response); 
        setToken(response.data.key); 
  props.setLoginState(true); 
      }) 
      .catch(function (error) { 
        console.log(error); 
      }); 
  } 
 
  return ( 
    <div className="main_wrapper"> 
      
      <div class="wrapper"> 
        <div className="lightBlueSideBar"> 
          <div className="lightBlueSignIn"> 
            <Link to="../../signin">SIGN IN</Link> 
          </div> 
          <div className="lightBlueAviasatuu"> 
            <Link to="/">AviaSatuu</Link> 
          </div> 
          <div className="lightBlueLongText"> 
            <Link to="/">Access to support and pricing subscriptions</Link> 
          </div> 
        </div> 
        <div className="rightWhiteSideBar"> 
   {login ? <h1 className="rotate">
     <div className="rotate_body">
  <em className="planet left"> You are </em>
  <em className="planet right">logged in</em></div>
  
</h1> : ( 
    <form className="formsReg"> 
    <div className="joinText">You can join with</div> 
    <div className="logInGmFcb"> 
      <div className="logInGmail"> 
     <Link to="/"> 
       <img src={gmail_logo} alt="Login with Gmail" /> 
       <div className="reg_Gmail">Login with Gmail</div> 
     </Link> 
      </div> 
      <div className="LogIn_Facebook"> 
     <Link to="/"> 
       <img src={fb_logo} alt="Login with Facebook" /> 
       <div className="reg_facebook">Login with Facebook</div> 
     </Link> 
      </div> 
    </div> 
  
    <div className="formInput"> 
      <input 
     className="email_class" 
     type="text" 
     placeholder="Enter Your Email" 
     name="userName" 
     value={userName} 
     onChange={(e) => setUsername(e.target.value)} 
     required 
      /> 
      <input 
     className="password_class" 
     type="password" 
     placeholder="Enter Your Password" 
     name="psw" 
     value={password} 
     onChange={(e) => setPassword(e.target.value)} 
     required 
      /> 
    </div> 
    <div className="circle_remember"> 
      <label> 
     <input 
       type="checkbox" 
       className="remember_text" 
       name="remember" 
     /> 
     <span className="remember_me">Remember me</span> 
      </label> 
    </div> 
    <div class="signup"> 
      <button type="button" onClick={getToken} className="signInBtn"> 
     Sign In 
      </button> 
    </div> 
  
    <div className="signUpAll"> 
      <div className="signUpText">Don’t have an account?</div> 
      <div className="signUpP"> 
     <Link to="../../signup">Sign Up</Link> 
      </div> 
    </div> 
     </form> 
   )} 
           
        </div> 
      </div> 
    </div> 
  ); 
}; 
 
export default SignIn;