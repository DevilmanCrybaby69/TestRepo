import { useState } from "react";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
function MyComponent() {
  console.log("testing");

  return (
    <div>
      <br></br>
    </div>
  );
}

const HelloWorld = () => {
  const [counter, setCounter] = useState(0);
  //  let  counter = 0;
  const add = () => {
    if(counter===20)
    {
        return;
    }
    setCounter(counter+1);

  };
  const remove = () => {
  if (counter === 0){

  }
    setCounter(counter-1);
  };
  return (

    <>
    <Navbar></Navbar>
      <div style={{ color: "red", textAlign: "center" }}>
        Hello World Component !!
        <br />
        <button onClick={add} className="btn btn-warning">Add btn</button>
        <br />
        <p>Total : {counter}</p>
        <br />
        <button onClick={remove} className="btn btn-warning">Remove btn</button>
      </div>
    </>
  );
};

export { HelloWorld, MyComponent };
