import './App.css';
import {useState, useRef} from "react";
import Header from './components/Header';
import Editor from './components/Editor';
import List from './components/List';

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

