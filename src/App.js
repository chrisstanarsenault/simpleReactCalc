import React, { Component } from 'react';
import './App.css';
import Button from './Button';
import Input from './Input';
import ClearButton from './ClearButton';

class App extends Component {
constructor(props) {
  super(props);

  this.state = {
    input: "",
    previousNumber: "",
    currentNumber: "",
    operator: ""
  };
}

  addToInput = val => {
    this.setState({ input: this.state.input + val });
  };

  // this checks to make sure the first digit being enter is
  // not zero, and only inputting if there is one valid number
  // first
  addZeroToInput = val => {
    if (this.state.input !== "") {
      this.setState({ input: this.state.input + val })
    }
  };

  addDecimalToInput = val => {
    //this checks and will make only one decimal is being used
    if (this.state.input.indexOf(".") === -1) {
      this.setState({ input: this.state.input + val })
    }
  };

  clearInput = () => {
    this.setState({ input: "" });
  }

  addition = () => {
    this.state.previousNumber = this.state.input;
    this.setState({ input: "" });
    this.state.operator = "plus";
  };

  divide = () => {
    this.state.previousNumber = this.state.input;
    this.setState({ input: "" });
    this.state.operator = "divide";
  };

  multiply = () => {
    this.state.previousNumber = this.state.input;
    this.setState({ input: "" });
    this.state.operator = "multiply";
  };

  subtract = () => {
    this.state.previousNumber = this.state.input;
    this.setState({ input: "" });
    this.state.operator = "subtract";
  };

  equals = () => {
    this.state.currentNumber = this.state.input;
    if (this.state.operator == "plus") {
      this.setState({
        input: parseFloat(this.state.previousNumber) + parseFloat(this.state.currentNumber)
      })
    }
    else if (this.state.operator == "subtract") {
      this.setState({
        input: parseFloat(this.state.previousNumber) - parseFloat(this.state.currentNumber)
      })
    }
    else if (this.state.operator == "multiply") {
      this.setState({
        input: parseFloat(this.state.previousNumber) * parseFloat(this.state.currentNumber)
      })
    }
    else if (this.state.operator == "divide") {
      this.setState({
        input: parseFloat(this.state.previousNumber) / parseFloat(this.state.currentNumber)
      })
    }
  };

  render() {
    return (
      <div className="App">
        <div className="calc-wrapper">
          <div className='row'>
            <Input>{this.state.input}</Input>
          </div>
          <div className="row">
            <Button handleClick={this.addToInput}>7</Button>
            <Button handleClick={this.addToInput}>8</Button>
            <Button handleClick={this.addToInput}>9</Button>
            <Button handleClick={this.divide}>/</Button>
          </div>
          <div className="row">
            <Button handleClick={this.addToInput}>4</Button>
            <Button handleClick={this.addToInput}>5</Button>
            <Button handleClick={this.addToInput}>6</Button>
            <Button handleClick={this.multiply}>*</Button>
          </div>
          <div className="row">
            <Button handleClick={this.addToInput}>1</Button>
            <Button handleClick={this.addToInput}>2</Button>
            <Button handleClick={this.addToInput}>3</Button>
            <Button handleClick={this.addition}>+</Button>
          </div>
          <div className="row">
            <Button handleClick={this.addDecimalToInput}>.</Button>
            <Button handleClick={this.addZeroToInput}>0</Button>
            <Button handleClick={this.equals}>=</Button>
            <Button handleClick={this.subtract}>-</Button>
          </div>
          <div className="row">
            <ClearButton handleClear={this.clearInput}>CLEAR</ClearButton>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
