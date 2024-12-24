import './App.css'
// import Card from './components/Card'

import { useState } from 'react';
function App() {
  const [inputVal,setInputVal] = useState("");
  const [inputNum,setInputNum] = useState("");
  const [itemList,setitemList] = useState([]);
  console.log(inputNum);

    const plusFn = (idx)=>{
      const oldMaterial = [...itemList];
      oldMaterial[idx].hr = Number(oldMaterial[idx].hr) + 1;
      setitemList(oldMaterial)
  }
  const minusFn = (idx)=>{
    const oldMal = [...itemList];
    if(oldMal[idx].hr <= 0) return;
    oldMal[idx].hr = Number(oldMal[idx].hr) - 1;
      setitemList(oldMal)
  }
  const marLat = (idx)=>{
    // const sundar = [...itemList]
    // sundar.filter((_,index)=>{
    //   return index !== idx;
    // })
    // setitemList(sundar)
    // &&
    const sundar = itemList.filter((_,index)=> {
      return index !== idx
    })
    setitemList(sundar)
  }
  const fnCalled=( a  ,b)=>{
    if(a === "" || b === "")return;
    setitemList([
      ...itemList,
      {name:inputVal,hr:Number(inputNum)}
    ])
    setInputNum("")
    setInputVal("")
  }
  
  return (
    <div className="container">
      <h1>Education Planner</h1>
      <div className="field">
        <input type="text" placeholder='Subject' onChange={(e)=>{
            setInputVal(e.target.value)
        }} value={inputVal} />
        <input type="number" placeholder='hour' className='inputBtn2' onChange={(e)=>{
            setInputNum(e.target.value)
        }} value={inputNum}/>
        <button onClick={()=>fnCalled(inputNum , inputVal)}>Add</button>
      </div>
      <div className="card">
          {itemList.map((ele,index)=>{
            return (
            <div key={index} className="item" >
                <h3>{ele.name}</h3>
                <p>{ele.hr} hr</p>
                <span className='span1' onClick={()=>plusFn(index)}>+</span>
                <span className='span2' onClick={()=>minusFn(index)}>-</span>
                <span className='span3' onClick={()=>marLat(index)}>X</span>
            </div>
            )
          })}
      </div>
    </div>
  )
}

export default App;
