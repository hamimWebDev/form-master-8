import React from "react";
import "./App.css";
import SFrom from "./Components/SimpleFrom/SFrom";
import StateFullForm from "./Components/StateFullForm/StateFullForm";
import UseRef from "./Components/UseRef/UseRef";
import ReusableFrom from "./Components/ReusableFrom/ReusableFrom";

const App = () => {
  return (
    <div>
      <h1>Vite + React</h1>
      {/* <SFrom></SFrom> */}
      {/* <StateFullForm></StateFullForm> */}
      {/* <UseRef></UseRef> */}
      <ReusableFrom fromTitle={"Sign Up"}>
        <h3>This is Sign Uppppp</h3>
      </ReusableFrom>
      <ReusableFrom fromTitle={"Profile Update"}>
        <h3>This is Profile Update eeee </h3>
      </ReusableFrom>
    </div>
  );
};

export default App;
