import React from 'react'
import './DatesSearch.css'


function Back({handleOnDateChange}) {
  const handleDate = (e) => {
    handleOnDateChange({ [e.target.name]: e.target.value })
  }
  return (
    <div><input type="date" placeholder='dd-mm' name='end' onChange={handleDate} className='whenSP' defaultValue={'Back'}/></div>
  )
}

export default Back