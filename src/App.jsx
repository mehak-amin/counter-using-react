// APP.JSX


import { useState } from 'react';
import './App.css';

function App() {
  const [counter, setCounter] = useState(10);

  const addValue = () => {
    if (counter<20 )
    setCounter(counter + 1);
  };

  const removeValue = () => {
    if (counter>0 ){
      setCounter(counter - 1);
    }
    
  };

  let message = null;
  if (counter <= 0) {
    message = <p className="message">Counter can't go below zero!</p>;
  } else if (counter >= 20) {
    message = <p className="message">Wow, that's a lot of clicks!</p>;
  }

  return (
    <div className="form-container">
      <h1 className="title">Counter Form</h1>
      <h3 className="counter" style={{ color: counter >= 20 ? 'red' : 'black' }}>
        Counter Value: {counter}
      </h3>
      {message}
      <div className="button-container">
        <button className="button" onClick={addValue}>Add Value</button>
        <button className="button" onClick={removeValue}>Remove Value</button>
      </div>
    </div>
  );
}

export default App;
