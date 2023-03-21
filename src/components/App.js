import React, { useState } from "react";
import './../styles/App.css';

const App = (props) => {
   const [change, setChange] = useState('hide')
  function viwePara(){
    setChange('show')

  }

  return (
    <div className="App" id="main">
      // Do not alter the main div
   <p id="para" className={change}>Hello, I've learnt to use the full-stack evaluation tool. This makes me so happy</p>
    <button id="click" onClick={viwePara}>Click me</button>
    </div>
  );
}

export default App
