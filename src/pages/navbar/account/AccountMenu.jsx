
import React, { useContext, useState } from 'react';
import FlightsContext from '../../../FlightsContext';
import codicon_account from '../../../assets/icons/codicon_account.svg';
import settings from '../../../assets/icons/settings.svg';
import documents from '../../../assets/icons/documents.svg';
import ticket from '../../../assets/icons/ticket.svg';
import { Link } from 'react-router-dom';
import './Account.css';


function AccountMenu() {
    const {isLogin, setIsLogin} = useContext(FlightsContext);

    function signOut() {
        setIsLogin(false)
    }
    return (
        <div className='vectorImg'>
            <Link to='/' className='accountLogo'>
                <img src={codicon_account} alt='' />
                <span className="account_text">
                    {isLogin ?  'Account' : "Sign In"}
                </span>

            </Link>
            <div className='accountContent'>
                {isLogin ? (<>


                    <button className='menu-btn' onClick={signOut}>Sign Out</button>

                </>) : <Link to='/signin'>

                    <Link to='passengers' className='settings'>
                        <img src={settings} alt='' />{' '}
                    </Link>
                    <Link to='/passengers' className='documents'>
                        {' '}
                        <img src={documents} alt='' />
                    </Link>
                    <Link to='/passengers' className='ticket'>
                        {' '}
                        <img src={ticket} alt='' />
                    </Link>
                    <Link to='/signin'>
                    <button className='menu-btn'>Sign In</button>
                    </Link>
                </Link>}


                <Link to='/' className='settings'>
                        <img src={settings} alt='' />{' '}
                    </Link>
                    <Link to='/' className='documents'>
                        {' '}
                        <img src={documents} alt='' />
                    </Link>
                    <Link to='/' className='ticket'>
                        {' '}
                        <img src={ticket} alt='' />
                    </Link>


            </div>
        </div>
    );
}
export default AccountMenu;