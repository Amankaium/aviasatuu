import React, {useState} from "react";
import SignMinus from '../../../../assets/icons/Ellipse1.svg'
import SignPlus from '../../../../assets/icons/Ellipse2.svg'

function IncDecCounter(){
    let [num, setNum]= useState(0);
    let incNum =()=>{
      if(num<10)
      {
      setNum(Number(num)+1);
      }
    };
    let decNum = () => {
       if(num>0)
       {
        setNum(num - 1);
       }
    }
   let handleChange = (e)=>{
     setNum(e.target.value);
    }
  
     return(
            <div className="passengerCount">
              <div className="passengerCount-btn">
                <button className="btn-outline-primary" type="button" onClick={decNum}>
                  <img src={SignMinus}/>
                </button>
              </div>
              <input type="number" className="form-control" value={num} onChange={handleChange}/>
              <div className="passengerCount-btn">
                <button className="btn btn-outline-primary" type="button" onClick={incNum}>
                  <img src={SignPlus}/>
                </button>
              </div>
            </div>
    );
  }

  export default IncDecCounter