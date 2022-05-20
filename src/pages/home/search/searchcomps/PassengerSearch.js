import React, {useEffect, useState} from 'react'
import './PassengerSearch.css'
import SelectClass from './SelectClass'
import IncDecCounter from './IncDecCounter'

function PassengerSearch() {
  const [isOpen, setIsOpen] = useState(false);
  const toggling = () => setIsOpen(!isOpen);

  return (
    <div>
      <input type='text' className='passengerSP'onClick={toggling}  />
      {isOpen && (
        <Dropdown />
        )}
    </div>
    );
}






function AdultCategory(){
  return(
    <div className="components">
      <div className='passengerComponent'>
        <div className='passengerItem'>
          <div className='passengerCategory'>Adults</div>
          <div className='passengerCategoryInfo'>Over 12 years old</div>
        </div>
        <IncDecCounter />
      </div>
    </div>
  )
}
function ChildrenCategory(){
  return(
    <div className="components">
      <div className='passengerComponent'>
        <div className='passengerItem'>
          <div className='passengerCategory'>Children</div>
          <div className='passengerCategoryInfo'>2 to 12 years old</div>
        </div>
        <IncDecCounter />
      </div>
    </div>
  )
}

function BabiesCategory(){
  return(
    <div className="components">
      <div className='passengerComponent'>
        <div className='passengerItem'>
          <div className='passengerCategory'>Babies</div>
          <div className='passengerCategoryInfo'>Up to 2 years old</div>
        </div>
        <IncDecCounter />
      </div>
    </div>
  )
}





function Dropdown(){
  return(
    <div>
      <div  className='dropdown'>
      <AdultCategory/>
      <ChildrenCategory/>
      <BabiesCategory/>
      <SelectClass />
      </div>
    </div>
  )
}

export default PassengerSearch;