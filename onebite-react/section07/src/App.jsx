import './App.css'
import Controller from './components/Controller';
import Viewer from './components/Viewer'
import Even from './components/even';
import { useState, useEffect, useRef } from 'react';

function App() {
  const [count, setCount] = useState(0);
  const [input, setInput] = useState("");
  
  const isMount = useRef(false);

  // 1. 마운트: 탄생
  useEffect(()=>{
      console.log("mount");
  },[]); // 컴포넌트 마운트 시 1번만 실행됨 


  // 2. 업데이트: 변화, 리렌더링
  useEffect(()=>{
    if(!isMount.current){
      isMount.current = true;
      return;
    } // if문을 통해 마운트 될 때는 시행되지 않게함
    console.log("update");
  }); // 컴포넌트 업데이트 될 때 마다 항상 실행


  // 3. 언마운트: 죽음
  



  // useEffect(()=>{
  //   console.log(`count: ${count} / input: ${input}`);
  // }, [count, input]); // count 인수가 바뀔 때 마다 첫번째로 전달한 콜백함수가 시행된다.
  // // 의존성 배열 (dependency array -> deps)

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
        { count % 2 == 0 ? <Even/> : null }
      </section>
      <section>
        <Controller onClickButton={onClickButton} />
      </section>
    </div>
  );
}

export default App
