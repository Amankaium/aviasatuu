import React, { useMemo, useState } from 'react'
import './PassengerSearch.css'
import SelectClass from './SelectClass'
import IncDecCounter from './IncDecCounter'

function PassengerSearch({ handleAddData }) {
  const [isOpen, setIsOpen] = useState(false);
  const toggling = () => setIsOpen(!isOpen);
  const [state, setState] = useState({
    adults: 0,
    children: 0,
    babies: 0,
    class: 'Economy'
  })
  const handleChange = (value, name)=>{
    handleAddData({ [name]: value })
    setState({...state, [name]:value})
  }

  const passCount = useMemo(()=>{return state.adults+ state.children + state.babies}, [state])
  return (
    <div>
      <input type='text' className='passengerSearch'onClick={toggling} value={passCount ? `${passCount} Passengers, ${state.class}` : 'Passengers&Class'}  />
      {isOpen && (
        <div className='passengerSearch__dropdown'>
        <AdultCategory  value={state.adults} name={"adults"} onChange={handleChange}/>
        <ChildrenCategory value={state.children} name={"children"} onChange={handleChange}/>
        <BabiesCategory value={state.babies} name={"babies"} onChange={handleChange}/>
        <SelectClass value={state.class} onChange={handleChange}  name='class'/>
        </div>
        )}
    </div>
    );
}

function AdultCategory(props){

  return(
    <div className="passengerSearch__components">
      <div className='passengerSearch__passengerComponent'>
        <div className='passengerSearch__passengerItem'>
          <div className='passengerSearch__passengerCategory'>Adults</div>
          <div className='passengerSearch__passengerCategoryInfo'>Over 12 years old</div>
        </div>
        <IncDecCounter {...props} />
      </div>
    </div>
  )
}
function ChildrenCategory(props){
  return(
    <div className="passengerSearch__components">
      <div className='passengerSearch__passengerComponent'>
        <div className='passengerSearch__passengerItem'>
          <div className='passengerSearch__passengerCategory'>Children</div>
          <div className='passengerSearch__passengerCategoryInfo'>2 to 12 years old</div>
        </div>
        <IncDecCounter {...props} />
      </div>
    </div>
  )
}

function BabiesCategory(props){
  return(
    <div className="passengerSearch__components">
      <div className='passengerSearch__passengerComponent'>
        <div className='passengerSearch__passengerItem'>
          <div className='passengerSearch__passengerCategory'>Babies</div>
          <div className='passengerSearch__passengerCategoryInfo'>Up to 2 years old</div>
        </div>
        <IncDecCounter {...props} />
      </div>
    </div>
  )
}







export default PassengerSearch;