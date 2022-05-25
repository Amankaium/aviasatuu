import React, {useState} from 'react'
import From from './From'
import Where from './Where'
import './CountrySearch.css'



function CountriesSearch() {
  
  return (
    <div className='countries'>
        <From />
        <Where />
    </div>
  )
}

export default CountriesSearch