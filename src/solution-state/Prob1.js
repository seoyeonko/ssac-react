import React, { Component } from "react";

class Prob1 extends Component {
  state = {
    initNum: 0,
  };

  render() {
    const { initNum } = this.state;
    return (
      <div>
        <div>{initNum}</div>
        <button
          onClick={() => {
            this.setState({ initNum: initNum + 2 });
          }}
        >
          +2
        </button>
        <button
          onClick={() => {
            this.setState({ initNum: initNum - 1 });
          }}
        >
          -1
        </button>
      </div>
    );
  }
}

export default Prob1;
