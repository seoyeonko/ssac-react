import React, { useState } from "react";

const Prob2 = () => {
  const [initNum, setInitNum] = useState(0);

  const Increase = () => setInitNum(initNum + 1);
  const Decrease = () => setInitNum(initNum - 2);

  return (
    <div>
      <div>{initNum}</div>
      <button onClick={Increase}>+1</button>
      <button onClick={Decrease}>-2</button>
    </div>
  );
};

export default Prob2;
