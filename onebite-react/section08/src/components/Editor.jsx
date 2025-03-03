import './Editor.css';
import {useState, useRef} from "react";

const Editor = ({ onCreate }) => {
    const [content, setContent] = useState("");
    const contentRef = useRef();

    const onChangeContent = (e) => {
        setContent(e.target.value);
    };

    const onKeyDown = (e) => {
        if (e.KeyCode === 13){
            onSubmit();
        }
    } // 엔터 놀러도 동작하도록

    const onSubmit = () => {
        if (content === "") {
            contentRef.current.focus();
            return;
        }
        onCreate(content);
        setContent(""); // 입력창 빈 문자열로 초기화
    };

    return (
        <div className='Editor'>
            <input 
            ref = {contentRef}
            value = {content}
            onKeyDown = {onKeyDown}
            onChange = {onChangeContent}
            placeholder="새로운 Todo..." />
            <button onClick={onSubmit}>추가</button>
        </div>
    );
};

export default Editor;