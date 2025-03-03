import './App.css';
import {useState, useRef, useReducer} from "react";
import Header from './components/Header';
import Editor from './components/Editor';
import List from './components/List';
import Exam from './components/Exam';

const mocData =[
  {
    id: 0,
    isDone: false,
    content: "React study",
    date: new Date().getTime(),
  },
  {
    id: 1,
    isDone: false,
    content: "빨래하기",
    date: new Date().getTime(),
  },
  {
    id: 2,
    isDone: false,
    content: "노래연습하기",
    date: new Date().getTime(),
  },
] // 리랜더링이 될 필요가 없기 때문에 컴포넌트 바깥에 선언

function reducer(state, action){
  switch(action.type){
    case 'CREATE': return [action.data, ...state];
    case 'UPDATE': return state.map((item)=>
    item.id === action.targetId? 
    {...item, isDone: !item.isDone}:item);
    case 'DELETE': return state.filter((item) => 
      item.id !== action.targetId);
    default: return state;
  }

}

function App() {
  const [todos, dispatch] = useReducer(reducer, mocData);
  const idRef = useRef(3);

  const onCreate = (content) => {
    dispatch({
      tyoe: "CREATE",
      data: {
        id: idRef.current++,
        isDone: false,
        content: content,
        date: new Date().getTime(),
      }
    })
  };

  const onUpdate = (targetId) => {
    dispatch({
      type: "UPDATE",
      targetId: targetId,
    })
  };

  const onDelete = (targetId) => {
    dispatch({
      type: "DELETE",
      targetId: targetId,
    })
  };

  return (
    <div className="App">
      <Header/>
      <Editor onCreate={onCreate}/>
      <List todos={ todos } 
      onUpdate={onUpdate} 
      onDelete={onDelete}/>
      {/* <Exam/> */}
    </div>
  )
}

export default App;