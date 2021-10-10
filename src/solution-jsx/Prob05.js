import React from "react";
import "./Prob05.css";

function Prob05() {
  const title = "Hello World";
  return (
    <div>
      <div className="test5">{title}</div>
      <div>
        <div className="input">
          아이디: <input type="text" />
        </div>
        <div className="input">
          비밀번호: <input type="password" />
        </div>
      </div>
    </div>
  );
}

export default Prob05;
