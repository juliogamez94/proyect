import PropTypes from "prop-types";
import React, { Component } from "react";

class Greeting extends Component {
  constructor(props) {
    super(props);
    this.state = {
      age: 28,
    };
  }
  render() {
    return (
      <div>
        <h1>!HOLA! {this.props.name} </h1>
        <h2>Tu edad es de:{this.state.age} </h2>
        <div>
          <button
            onClick={() =>
              this.setState((prevState) => ({ age: prevState.age + 1 }))
            }
          >
            Cumplir años
          </button>
        </div>
      </div>
    );
  }
}

Greeting.propTypes = {
  name: PropTypes.string,
};

export default Greeting;
