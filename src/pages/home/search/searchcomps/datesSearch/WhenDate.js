import React from 'react'
import './DatesSearch.css'


function WhenDate({ handleOnDateChange }) {
  const handleDate = (e) => {
    handleOnDateChange({ [e.target.name]: e.target.value })
  }
  return (
    <div>
      <input required type="date" onChange={handleDate} placeholder='dd-mm' name='start' className='datesSearch__input'/>
      </div>
  )
}

export default WhenDate