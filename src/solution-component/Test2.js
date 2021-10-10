import React, { Component } from "react";
import dog from "./dog.jpg";

class Test2 extends Component {
  render() {
    const style = {
      color: "orange",
      fontSize: "24px",
      marginTop: "12px",
    };

    return (
      <>
        <div style={style}>
          <h2>안녕하세요</h2>
          <img src={dog} alt="강아지" width="500px" />
        </div>
      </>
    );
  }
}

export default Test2;
