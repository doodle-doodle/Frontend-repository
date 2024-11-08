// 3가지 Hook에 관련된 팁
// 1. 함수 컴포넌트, 커스텀 훅 내부에서만 호출 가능
// 2. 조건부로 호출될 수는 없다.
// 3. 나만의 훅(Custom Hook)을 직접 만들 수 있다. 

import useInput from "./../hooks/useInput";

// const state = useState(); // 불가능(함수 컴포넌트 외부)

const HookExam =() => {

    const [input, onChange] = useInput();
    const [input2, onChange2] = useInput();
    // if (true) {

    // }
    // for(;;) {

    // } // 이런 조건문, 반복문에서 호출 불가능 (내부적 오류 방지)
    return(
        <div>
            <input value={input} onChange={onChange}></input>
            <input value={input2} onChange={onChange2}></input>
        </div>
    );
}

export default HookExam;