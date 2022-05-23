import React, { useMemo, useState } from 'react'
import './PassengerSearch.css'
import SelectClass from './SelectClass'
import IncDecCounter from './IncDecCounter'

function PassengerSearch() {
  const [isOpen, setIsOpen] = useState(false);
  const toggling = () => setIsOpen(!isOpen);
  const [state, setState] = useState({
    adults: 0,
    children: 0,
    babies: 0,
    class: 'Economy'
  })
  const handleChange = (value, name)=>{
    setState({...state, [name]:value})
  }
  const passCount = useMemo(()=>{return state.adults+ state.children + state.babies}, [state])
  return (
    <div>
      <input type='text' className='passengerSP'onClick={toggling} value={passCount ? `${passCount} Passengers, ${state.class}` : 'Passengers&Class'}  />
      {isOpen && (
        <div className='dropdown'>
        <AdultCategory  value={state.adults} name={"adults"} onChange={handleChange}/>
        <ChildrenCategory value={state.children} name={"children"} onChange={handleChange}/>
        <BabiesCategory value={state.babies} name={"babies"} onChange={handleChange}/>
        <SelectClass onChange={handleChange} name='class'/>
        </div>
        )}
    </div>
    );
}

function AdultCategory(props){

  return(
    <div className="components">
      <div className='passengerComponent'>
        <div className='passengerItem'>
          <div className='passengerCategory'>Adults</div>
          <div className='passengerCategoryInfo'>Over 12 years old</div>
        </div>
        <IncDecCounter {...props} />
      </div>
    </div>
  )
}
function ChildrenCategory(props){
  return(
    <div className="components">
      <div className='passengerComponent'>
        <div className='passengerItem'>
          <div className='passengerCategory'>Children</div>
          <div className='passengerCategoryInfo'>2 to 12 years old</div>
        </div>
        <IncDecCounter {...props} />
      </div>
    </div>
  )
}

function BabiesCategory(props){
  return(
    <div className="components">
      <div className='passengerComponent'>
        <div className='passengerItem'>
          <div className='passengerCategory'>Babies</div>
          <div className='passengerCategoryInfo'>Up to 2 years old</div>
        </div>
        <IncDecCounter {...props} />
      </div>
    </div>
  )
}







export default PassengerSearch;