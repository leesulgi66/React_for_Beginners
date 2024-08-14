import Button from "./Button";
import styles from "./App.module.css";
import { useEffect, useState } from "react";

function App() {
  const [counter, setValue] = useState(0);
  const [keyword, setKeyword] = useState("");
  const onChange = (event)=> {setKeyword(event.target.value)};
  const onClick = ()=> setValue((prev)=>prev+1);
  console.log("I run all the time");
  useEffect(()=>{console.log("CALL THE API...")}, []);
  useEffect(()=>{
    if(keyword !== "" && keyword.length > 5){
      console.log("SEARCH FOR", keyword)
    }},[keyword]);
  return (
    <div>
      <input value={keyword} onChange={onChange} type="text" placeholder="Search here..." />
      <h1>{counter}</h1>
      <button onClick={onClick}>click me</button>
    </div>
  );
}

export default App;
