// 간단한 회원가입 폼
// 이름, 생년월일, 국적, 자기소개
import { useState, useRef } from "react";

const Register =()=> {
    const [input, setInput] = useState({
        name: "",
        birth: "",
        country: "",
        bio: "",
    });

    const countRef = useRef(0);
    const inputRef = useRef();

    let count = 0; // 리렌더링될 때 마다 다시 초기화 


    const onChange = (e) => {
        // countRef.current++;
        count++;
        console.log(count);
        setInput ({
            ...input,
            [e.target.name]: e.target.value,


        })
    }

    const onSubmit = () => {
        if(input.name === "") {
            // 이름을 입략하는 돔 요소 포커스 
            inputRef.current.focus();
        }
    }
    // 하나의 통합 이벤트 핸들러로 사용할 수 있다 

    return(
        <div>
            <div>
                <input ref={inputRef} name="name" value={input.name} onChange={onChange} placeholder={"이름"} />
            </div>
            <div>
                <input name="birth"  type="date" value={input.birth} onChange={onChange} />
            </div>
            <div>
                <select name="country" value={input.country} onChange={onChange} >
                    <option value=""></option>
                    <option value="kr">한국</option>
                    <option value="us">미국</option>
                    <option value="uk">영국</option>
                </select>
            </div>
            <div>
                <textarea  name="bio" value={input.bio} onChange={onChange}/>
            </div>
            <button onClick={onSubmit} > 제출</button>
            

        </div>
    )
}

export default Register;