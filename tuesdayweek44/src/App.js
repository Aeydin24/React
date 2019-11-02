import React, { useState, useEffect } from 'react';
import './App.css';

function App(props) {
  const { initialValue, increment } = props;
  const [count, setCount] = useState(
    Number(window.localStorage.getItem("count") || initialValue)
  );

  useEffect(() => {
    window.localStorage.setItem("count", count);
  });

  return (
    <div className="App">
      <p>The button has been clicked {count} times.</p>
      <button onClick={() => setCount(count + increment)}>
        Click me to increment by one
      </button>
      <br></br>
      <button onClick={() => setCount(count - increment)}>
        Click me to decrement by one
      </button>
    </div>
  );
}

export default App;


