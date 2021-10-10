import React from "react";
import Enter from "./Enter";
import Lan from "./Lan";
import Food from "./solution-props/Food";
import Book from "./solution-props/Book";
import Text from "./solution-props/Text";
import Prob1 from "./solution-state/Prob1";
import Prob2 from "./solution-state/Prob2";

const App = () => {
  return (
    <>
      <Enter />
      <Lan />
      <Food food="순두부찌개" />
      <Book title="나의 하루는 4시 40분에 시작된다" author="홍길동" price="19,900" type="자기계발서" />
      <Text
        text="App 컴포넌트에서 넘겨준 text props입니다."
        valid={() => {
          console.log("콘솔 띄우기 성공!");
        }}
      />
      <br />
      <Prob1 />
      <br />
      <Prob2 />
    </>
  );
};

export default App;
