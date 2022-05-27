import React from 'react'
import './DatesSearch.css'


function BackDate({handleOnDateChange}) {
  const handleDate = (e) => {
    handleOnDateChange({ [e.target.name]: e.target.value })
  }
  return (
    <div><input type="date" placeholder='dd-mm' name='end' onChange={handleDate} className='datesSearch__input' defaultValue={'Back'}/></div>
  )
}

export default BackDate