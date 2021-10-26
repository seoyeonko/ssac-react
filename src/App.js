import React, {useState} from 'react';

const App = () => {
  const [food, setFood] = useState([
    {id: 1, text: '삼겹살'},
    {id: 2, text: '아이스크림'},
    {id: 3, text: '회덮밥'},
    {id: 4, text: '돈까스'},
  ])

  const [inputText, setInputText] = useState("");
  const [nextId, setNextId] = useState(5);
  
  const onChnage = e => setInputText(e.target.value);
  const onClick = () => {
    const nextFood = food.concat({
      id: nextId, 
      text: inputText,
    });
    setNextId(nextId + 1);
    setFood(nextFood);
    setInputText('');
  };
  const onRemove = (id) => {
    // 더블클릭된 아이템을 제외한 나머지 리스트를 저장 
    const nextFood = food.filter(f => f.id !== id)
    setFood(nextFood);
  }

  const foodList = food.map((f) => <li key={f.id} onDoubleClick={()=>onRemove(f.id)}>{f.id + ":" +f.text}</li>)

  return (
    <>
      <input type="text" value={inputText} onChange={onChnage} />
      <button onClick={onClick}>추가</button>
      {foodList}
    </>
  );
};


export default App;