import React, { useState, useEffect } from "react";
import AddEditPerson from "./AddEditPerson";
import AllPersons from "./AllPersons";

function App({ apiFacade }) {
  const emptyPerson = { id: "", age: "", name: "", email: "", gender: "" };
  const [personToAddEdit, setPersonToAddEdit] = useState(emptyPerson);
  const [persons, setPersons] = useState([]);

  const updateList = () => {
    apiFacade.getPersons().then(data => {
      setPersons(data);
    });
  };

  useEffect(() => {
    updateList();
    const timer = setInterval(() => {
      updateList();
    }, 3000);

    // Clean-up
    return () => {
      clearInterval(timer);
    };
  }, []);

  const storeAddEditPerson = person => {
    apiFacade.addEditPerson(person);
    console.log("storeAddEditPerson");
  };

  const deletePerson = id => {
    apiFacade.deletePerson(id);
  };

  const editPerson = person => {
    setPersonToAddEdit(person);
  };

  return (
    <div className="container">
      <div className="row">
        <h3>CRUD Demo </h3>
        <div className="col-md-7">
          <h3>All Persons</h3>
          <AllPersons
            persons={persons}
            editPerson={editPerson}
            deletePerson={deletePerson}
          />
        </div>
        <div className="col-md-5">
          <h3 style={{ textAlign: "center" }}>Add Persons</h3>
          <AddEditPerson
            newPerson={personToAddEdit}
            addEditPerson={storeAddEditPerson}
          />
        </div>
      </div>
    </div>
  );
}
export default App;