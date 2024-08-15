import { useEffect, useState } from "react";

function Hello() {
  function byFn() {
    console.log("Bye :(")
  } 
  function hiFn() {
    console.log("Hi :)")
    return byFn;
  } 
  useEffect(hiFn, []);
  return <h1>Hello</h1>;
}

function App() {
  const [showing, setShowing] = useState(false);
  const onClick = ()=>{setShowing((pre)=>!pre)};
  return (
    <div>
      {showing ? <Hello /> : null}
      <button onClick={onClick}>{showing ? "hide" : "show"}</button>
    </div>
  );
}

export default App;