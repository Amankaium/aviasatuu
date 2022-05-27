import React from 'react'
import './DatesSearch.css'
import WhenDate from './WhenDate'
import BackDate from './BackDate'

function DatesSearch({ handleFilters }) {
  const handleOnDateChange = (data) => {
    handleFilters(data)
  }

  return (
    <div className='datesSearch'>
      <WhenDate handleOnDateChange={handleOnDateChange} />
      <BackDate handleOnDateChange={handleOnDateChange}/>
    </div>
    )
}

export default DatesSearch
