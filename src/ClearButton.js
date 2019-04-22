import React, { Component } from 'react';

class ClearButton extends Component {

  render() {
    return (
      <div
        className="clearButton"
        onClick={() => this.props.handleClear()}
        >
        CLEAR
      </div>
    );
  }
}

export default ClearButton;
