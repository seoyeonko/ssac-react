import React, { Component } from "react";

class Test extends Component {
  render() {
    const { name, children } = this.props; // Destructuring Assignmeent (ES6)

    return (
      <div>
        안녕하세요 제이름은 {name}입니다
        <br />
        children 값은 {children}입니다.
      </div>
    );
  }
}

export default Test;
