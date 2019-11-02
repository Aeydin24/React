import React from 'react';
import './App.css';
import person, {males, females} from "./file2";

const { firstName, email } = person;


function App() {
  return (
    <div className="App">
      <p>{firstName}, {email}</p>
    </div>
  );
}

const mplusf = [...males, ...females]

const morenames = ["Kurt", "Helle"]
const lastname = ["Tina"]

const fullarrayofnames = [...males, ...morenames, ...females, ...lastname]

console.log(mplusf);
console.log(fullarrayofnames)


export default App;