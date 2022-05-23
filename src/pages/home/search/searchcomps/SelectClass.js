import React, {useState} from "react"
import './PassengerSearch.css'

function SelectClass({onChange, name}){
  
  const handleChange = (e) =>{
    onChange(e.target.value, name)
  }
    return(
      <div className='selectClass'> 
      <label className='economyclass'>
      <input type='radio' value='Economy' name='class' onChange={handleChange} /> Economy
      </label>
      <label className='businessclass'>
      <input type='radio' value='Business' name='class' onChange={handleChange} /> Business
      </label>
  </div>
    )
  }

export default SelectClass