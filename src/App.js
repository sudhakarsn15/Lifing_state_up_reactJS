import React from "react";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h3>1. Lifiting up state from child to parent</h3>
      <Calculator />
    </div>
  );
}

/**
 * Claculator is Parent class
 */
class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = { temperature: "" };
  }

  handleChange = (e) => {
    this.setState({ temperature: e.target.value });
  };

  render() {
    const temperature = this.state.temperature;
    return (
      <fieldset>
        <legend>Enter temperature in Celsius:</legend>
        <input value={temperature} onChange={this.handleChange} />
        <BoilingVerdict celsius={parseFloat(temperature)} />
      </fieldset>
    );
  }
}

function BoilingVerdict(props) {
  if (props.celsius >= 100) {
    return <p>The water would boil.</p>;
  }
  return <p>The water would not boil.</p>;
}
