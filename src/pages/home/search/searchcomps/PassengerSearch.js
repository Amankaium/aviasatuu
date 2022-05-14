import React, {useState} from 'react'
import './PassengerSearch.css'
import SignMinus from '../../../../assets/icons/Ellipse1.svg'
import SignPlus from '../../../../assets/icons/Ellipse2.svg'



function PassengerSearch() {
  const [isOpen, setIsOpen] = useState(false);
  const toggling = () => setIsOpen(!isOpen);
  return (
    <div>
      <input type='select' className='passengerSP'onClick={toggling}/>
      {isOpen && (
        <Dropdown />
        )}
    </div>
    );
}



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
              <button className="btn btn-outline-primary" type="button" onClick={decNum}>
                <img src={SignMinus}/>
              </button>
            </div>
            <input type="text" className="form-control" value={num} onChange={handleChange}/>
            <div className="passengerCount-btn">
              <button className="btn btn-outline-primary" type="button" onClick={incNum}>
                <img src={SignPlus}/>
              </button>
            </div>
          </div>
  );
}


function Passengers(props){
  const [state, setState] = useState({
    categories: [
      {id: 1, category: 'Adults'},
      {id: 2, category: 'Children'},
      {id: 3, category: 'Babies'},
    ],
    descriptions: [
      {id: 1, description: 'Over 12 years old'},
      {id: 2, description: '2 to 12 years old'},
      {id: 3, description: 'Up to 2 years'},
    ]
  })

  let categoriesElements = state.categories.map( c => <categoryItem c={c.category} id={c.id} />  );
  let descriptionsElements = state.descriptions.map( d => <descriptionItem d={d.description} /> );
  
  return(
    <div className="components">
      <div className='passengerComponent'>
        <div className='passengerItem'>
          <div className='passengerCategory'>{categoriesElements}</div>
          <div className='passengerCategoryInfo'>{descriptionsElements}</div>
        </div>
        <IncDecCounter />
      </div>
    </div>
  )
}

function SelectClass(){
  return(
    <div className='selectClass'> 
    <label>
    <input type='radio' value='Economy' name='class'className='economyclass'/> Economy
    </label>
    <label>
    <input type='radio' value='Business' name='class' className='businessclass'/> Business
    </label>
</div>
  )
}

function Dropdown(){
  return(
    <div>
      <div  className='dropdown'>
      <Passengers/>
      <Passengers/>
      <Passengers/>
      <SelectClass />
      </div>
    </div>
  )
}

export default PassengerSearch