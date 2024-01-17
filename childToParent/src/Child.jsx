import {useState} from 'react'
import './App.css' 

const Card = (props)=>{
    const [data,setData] = useState("No Value");
    function functionToPassDataFromChildToParent(){
        props.parentFunction(data);
    }
    return (<>
        <div> 
            <h3> Child Component </h3>
            <input
            type="text"
            value={data}
            onChange={(val)=>{setData(val.target.value)}}
            />
            <p>Child Data Getting Updated : {data}</p>
            <button onClick={functionToPassDataFromChildToParent}>Submit</button>
        </div>
    </>)
}

export default Card;