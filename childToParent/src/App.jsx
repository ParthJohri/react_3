import { useState } from 'react'
import Child from './Child.jsx'
import './App.css'

function App() {
  const [dataFromChild,setData] = useState("No Data");
  
  function parentFunction(dataFromChild){
    setData(dataFromChild);
  }

  return (
    <>
      <div className="card">
          <h1> Parent Container </h1>
          <p> Data From Child : {dataFromChild}</p>
          <Child parentFunction={parentFunction}/>
      </div>
    </>
  )
}

export default App
