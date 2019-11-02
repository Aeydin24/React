import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import FormDemo from "./FormDemo";
import FormDemoMultiple from "./FormDemoMultiple";


let app = <FormDemoMultiple />;

const DontUseMeForReal = () => {
  return (
    <div className="App" onClick={handleSelect}>
      <a href="/" className="x" id="app1">
        FormDemo
      </a>{" "}
      &nbsp;
      <a href="/" className="x" id="app2">
        FormDemoMultiple
      </a>{" "}
      &nbsp;
      {app}
    </div>
  );
};

function handleSelect(event) {
  event.preventDefault();
  if (event.target.className !== "x") {
    return;
  }
  const id = event.target.id;
  switch (id) {
    case "app1":
      app = <FormDemo />;
      break;
    case "app2":
      app = <FormDemoMultiple />;
      break;
  }
  ReactDOM.render(<DontUseMeForReal />, document.getElementById("root"));
}

ReactDOM.render(<DontUseMeForReal />, document.getElementById("root"));

