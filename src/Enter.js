import React, { Component } from "react";

class Enter extends Component {
  // 생성자 함수
  // sol1)
  // constructor(props) {
  //   super(props); // 반드시 호출
  //   this.state = {
  //     enter: 0,
  //   };
  // }

  // sol2)
  state = {
    enter: 0,
  };

  render() {
    const { enter } = this.state;

    return (
      <div>
        <h2>입장한 사람 수 : {enter}명</h2>
        <button
          onClick={() => {
            this.setState({ enter: enter + 1 });
          }}
        >
          입장
        </button>
        <button
          onClick={() => {
            this.setState({ enter: enter - 1 });
          }}
        >
          퇴장
        </button>
      </div>
    );
  }
}

export default Enter;
