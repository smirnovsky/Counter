import React, { useState } from 'react';
import './index.scss';

function App() {
  const [counter, setCounter] = useState(0);

  const counterPlus = () => {
    setCounter(counter + 1)
  }

  const counterMinus = () => {
    setCounter(counter - 1)
  }

  return (
    <div className="App">
      <div>
        <h2>Счетчик:</h2>
        <h1>{counter}</h1>
        <button onClick={counterMinus} className="minus">-</button>
        <button onClick={counterPlus} className="plus">+</button>
        <h1>Hello World</h1>
      </div>
    </div>
  );
}

export default App;
