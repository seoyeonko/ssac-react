import React, { useState } from "react";

const Lan = () => {
  const [lang, setLang] = useState("🤔");
  const KorEnter = () => setLang("안녕안녕?");
  const EngEnter = () => setLang("Hihi?");

  return (
    <div>
      <h1>{lang}</h1>
      <button onClick={KorEnter}>한국어</button>
      <button onClick={EngEnter}>영어</button>
    </div>
  );
};

export default Lan;
