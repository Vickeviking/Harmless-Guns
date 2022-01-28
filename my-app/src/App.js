import React from "react";
import './App.css';
import Header from "./Header";
import SubHeader from "./SubHeader";
import Home from "./Home";

function App() {
  return (
    // BEM naming convension
    //länkar in sidorna
    <div className="App">
      <Header />
      <SubHeader />  
      <Home />
    </div>
  );
}

export default App;
