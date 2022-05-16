import React, {useState} from 'react'
import './DateSearch.css'
import { DateRange } from "react-date-range";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";

function DateSearch() {
  const [isOpen, setIsOpen] = useState(false);
  const toggling = () => setIsOpen(!isOpen);
  return (
    <div>
      <input type='select' className='passengerSP'onClick={toggling} value={DateSearchDropdown.state}/>
      {isOpen && (
        <DateSearchDropdown />
        )}
    </div>
    );
}

function DateSearchDropdown() {
  const [state, setState] = useState([
    {
      startDate: new Date(),
      endDate: null,
      key: "selection"
    }
  ]);
  return (
    <div className="datepicker">
      
      <DateRange
        onChange={item => setState([item.selection])}
        moveRangeOnFirstSelection={false}
        ranges={state}
      />
    </div>
  );
//   return (
//     <div><input type="date" className='whenSP' placeholder="dd-mm-yyyy" /></div>
//     )
}

export default DateSearch;
