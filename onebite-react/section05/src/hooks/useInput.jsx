import {useState} from "react";

function useInput() { // 함수 이름 앞에 use를 붙이면 리액트가 커스텀 훅으로 인식
    const [input, setInput] = useState("");

    const onChange = (e) => {
        setInput(e.target.value);
    };

    return [input, onChange]
}

export default useInput;