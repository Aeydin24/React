import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import App2 from './App2';
import App3 from './App3';

let app = <App initialValue={0} increment={3} />;

const DontUseMeForReal = () => {
    return (
        <div className="App" onClick={handleSelect}>
            <a href="/" className="x" id="app1">
                App
      </a>{" "}
            &nbsp;
      <a href="/" className="x" id="app2">
                App2
      </a>{" "}
            &nbsp;
        <a href="/" className="x" id="app3">
                App3
      </a>{" "}
            &nbsp;
      {/* Add as many as you have exercises, but remember className="x" */}
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
    // eslint-disable-next-line
    switch (id) {
        case "app1":
            app = <App />;
            break;
        case "app2":
            app = <App2 />;
            break;
            case "app3":
            app = <App3 />;
            break;
    }
    ReactDOM.render(<DontUseMeForReal />, document.getElementById("root"));
}

ReactDOM.render(<DontUseMeForReal />, document.getElementById("root"));