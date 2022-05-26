import React from 'react'
import './DatesSearch.css'
import When from './When'
import Back from './Back'

function DatesSearch({ handleFilters }) {
  const handleOnDateChange = (data) => {
    handleFilters(data)
  }

  return (
    <div className='datesSearch'>
      <When handleOnDateChange={handleOnDateChange} />
      <Back handleOnDateChange={handleOnDateChange}/>
    </div>
    )
}

export default DatesSearch
