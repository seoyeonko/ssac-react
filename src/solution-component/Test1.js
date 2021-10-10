import React, { Component } from "react";

class Test1 extends Component {
  render() {
    const name = "고서연";
    const my_style = {
      backgroundColor: "#ddd",
      color: "rgb(29, 29, 31)",
      fontSize: "40px",
      padding: "12px",
    };

    return (
      <>
        <div style={my_style}>{name}</div>
      </>
    );
  }
}

export default Test1;
