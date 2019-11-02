import React, { useState, useEffect } from 'react';

  function App(props) {
    const [date, setDate] = useState(new Date().toLocaleDateString());

    useEffect(() => {
        const s = setInterval(() => {
          setDate(new Date().toLocaleTimeString());
        }, 1000);
    
        //Clears the setInterval to prevent state issues
        return () => clearInterval(s);
      })

    return (
      <div className="App">
        <p>
            Time is: {date}
        </p>
      </div>
    );
  }
  
  export default App;