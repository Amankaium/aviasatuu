import React, {useState} from 'react'
import FromToCountry from './FromToCountry'
import './CountrySearch.css'



function CountriesSearch({citiesFrom, citiesTo, handleFilters}) {
  const handleOnChange = (value) => {
    handleFilters(value)
  }

  return (
    <div className='countriesSearch__fromto'>
        <FromToCountry name={'from_city'} placeholder={'From'} handleOnChange={handleOnChange} cities={citiesFrom} />
        <FromToCountry name={'to_city'} placeholder={'To'} handleOnChange={handleOnChange} cities={citiesTo} />
    </div>
  )
}

export default CountriesSearch