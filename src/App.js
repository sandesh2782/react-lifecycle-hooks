import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

import Lifecycles from "./lifecycles.component";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showChild: true,
      text: 1
    };
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <button
            onClick={() =>
              this.setState(state => ({
                showChild: !state.showChild
              }))
            }
          >
            Toggle Lifecycles
          </button>
          <button
            onClick={() => {
              this.setState(state => ({
                text: state.text + 1
              }));
            }}
          >
            Update Text
          </button>
          {this.state.showChild ? <Lifecycles text={this.state.text} /> : null}
        </header>
      </div>
    );
  }
}

export default App;
