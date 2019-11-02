import React from 'react';

import PropTypes from 'prop-types';

import  { names }  from "./file2";

function Welcome(props) {
    return <h1>Hello, {props.name}</h1>;
    //får error ved brug af <Welcome name={45} />
  }
  Welcome.propTypes = {
      name: PropTypes.string
  };


  function WelcomePerson(props) {
      const person = props.person;
      const { firstName, lastName, email } = person;
  return (
      <div>
          <p>
              Person: <br></br>
              First Name: {firstName} <br></br>
              Last Name: {lastName} <br></br>
              Email: {email} <br></br>
          </p>
      </div>
  );
    }
  function App() {
    return (
      <div>
        <Welcome name="Sara" />
        <Welcome name="Cahal" />
        <Welcome name="Edite" />
        <WelcomePerson person={names[0]}  />
        <WelcomePerson person={names[1]}  />
        <WelcomePerson person={names[2]}  />
      </div>
    );
  }
  export default App;