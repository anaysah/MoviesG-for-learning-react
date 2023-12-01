import { useEffect, useState } from 'react';
import './App.css';

const Person =(props)=>{
  return(
    <>
    Name: {props.name};
    Age: {props.age}
    <br />
    </>
  )
}

function App() {
  // console.log('Component re-rendered');
  const [counter, setCounter] = useState(0);

  // useEffect(()=>{
  //   console.log(counter);
  // }) //without dependency array it it will start on reload
  // useEffect(()=>{
  //   console.log(counter);
  // }, []) //it is same like without dependency array

  useEffect(()=>{
    // console.log(counter);
    console.log("counter is changed");
  }, [counter]) 

  return (
    <>
    <Person name="ajay" age={20}/>
    <Person name="yashvi" age="20"/>
    <br/>  
    <button onClick={() => setCounter(counter + 1)}>+</button>
    <h1>{counter}</h1>
    <button onClick={() => setCounter(counter - 1)}>-</button> 
    <br/>
    <button onClick={() => setCounter((prevCounter)=>prevCounter+1)}>+</button>
    <h1>{counter}</h1>
    <button onClick={() => setCounter((prevCounter)=>prevCounter-1)}>-</button> 
    </>
  );
}

export default App;
