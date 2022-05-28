import React, {useState} from "react"
import './PassengerSearch.css'

function SelectClass({onChange, name, value}){
  
  const handleChange = (e) =>{
    onChange(e.target.value, name)
  }
    return(
      <div className='selectClass'> 
      <div>
      <label className='selectClass__economyclass'>
      <input type='radio' value='Economy' checked={value === 'Economy'} name='class' onChange={handleChange} /> Economy
      </label>
      </div>
      <div>
      <label className='selectClass__businessclass'>
      <input type='radio' value='Business' checked={value === 'Business'} name='class' onChange={handleChange} /> Business
      </label>
      </div>
  </div>
    )
  }

export default SelectClass