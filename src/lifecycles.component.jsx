import React, { Component } from "react";

class Lifecycles extends Component {
  constructor(props) {
    super(props);
    console.log("Lifecycles constructor!");
  }

  componentDidMount() {
    console.log("componentDidMount!");
  }

  componentDidUpdate() {
    console.log("componentDidUpdate!");
  }

  componentWillUnmount() {
    console.log("componentWillUnmount!");
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log("shouldComponentUpdate!", nextProps);
    return nextProps.text % 2 === 0;
  }

  render() {
    console.log("render!");
    return (
      <div className="lifecycles">
        <h3>LIFECYCLE COMPONENT</h3>
        {this.props.text}
      </div>
    );
  }
}

export default Lifecycles;
