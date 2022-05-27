import React, {useState, useEffect} from "react";
import SignMinus from '../../../../../assets/icons/Ellipse1.svg'
import SignPlus from '../../../../../assets/icons/Ellipse2.svg'

function IncDecCounter({value, onChange, name}){
    
    const incNum =()=>{
      if(value<10)
      {
      onChange(Number(value)+1, name);
      }
    };
    const decNum = () => {
       if(value>0)
       {
        onChange(value - 1, name);
       }
    }
   const handleChange = (e)=>{
     onChange(e.target.value, e.target.name)
    }
    
     return(
            <div className="incDecCounter__passengerCount">
              <div className="passengerCount-btn">
                <button className="btn-outline-primary" type="button" onClick={decNum}>
                  <img src={SignMinus}/>
                </button>
              </div>
              <input type="number" className="incDecCounter__form-control" name={name} value={value} onChange={handleChange}/>
              <div className="passengerCount-btn">
                <button className="btn btn-outline-primary" type="button" onClick={incNum}>
                  <img src={SignPlus}/>
                </button>
              </div>
            </div>
    );
  }

  export default IncDecCounter