import React from "react"
import './PassengerSearch.css'

function SelectClass(){
    return(
      <div className='selectClass'> 
      <label className='economyclass'>
      <input type='radio' value='Economy' name='class'/> Economy
      </label>
      <label className='businessclass'>
      <input type='radio' value='Business' name='class' /> Business
      </label>
  </div>
    )
  }

export default SelectClass