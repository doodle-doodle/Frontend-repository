import './App.css'
import Controller from './components/Controller';
import Viewer from './components/Viewer'
import { useState, useEffect } from 'react';

function App() {
  const [count, setCount] = useState(0);
  const [input, setInput] = useState("");

  useEffect(()=>{
    console.log(`count: ${count} / input: ${input}`);
  }, [count, input]); // count 인수가 바뀔 때 마다 첫번째로 전달한 콜백함수가 시행된다.
  // 의존성 배열 (dependency array -> deps)

  const onClickButton = (value)=> {
    setCount(count + value); // 호출만 된거고 완료된 것은 아니다...
    console.log(count); // 비동기로 동작해서 이전의 state를 불러온다. 
  };

  return (
    <div className="App"> 
      <h1>Simple Counter</h1>
      <section>
        <input value={input} onChange={(e)=>{
          setInput(e.target.value);
        }} />
      </section>
      <section>
        <Viewer count={count} />
      </section>
      <section>
        <Controller onClickButton={onClickButton} />
      </section>
    </div>
  );
}

export default App
