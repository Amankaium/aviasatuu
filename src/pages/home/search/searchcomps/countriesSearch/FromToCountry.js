import React, { useState } from 'react'
import './CountrySearch.css'


const CountryFromTo = ({ handleOnChange, name, placeholder, cities }) => {
  const handleChangeCountry = (e) => {
    console.log(e.target.value)
    handleOnChange({ [e.target.name]: e.target.value })
  }

  return (
    <div>
        <div>
        <select onChange={handleChangeCountry} className='fromToCountry__countrySearch' name={name} placeholder={placeholder}>
          <option value={null} hidden>{placeholder}</option>
          {cities && cities.map((item) => {
            return <option className='options' value={item}>{item}</option>
          })}
        </select>
          {/* <input type='select' name={name} placeholder={placeholder} className='countrySearch' onChange={handleChangeCountry}>

          </input> */}
        </div>
    </div>
  )
}


export default CountryFromTo;