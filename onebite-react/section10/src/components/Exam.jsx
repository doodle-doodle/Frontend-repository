import { useReducer } from "react";

function reducer(state, action){
    // console.log(state, action);
    // if (action.type === "INCREASE") {
    //     return state + action.data;
    // } else if (action.type === "DICREASE") {
    //     return state - action.data;
    // }

    switch(action.type) {
        case 'INCREASE': return state + action.data;
        case 'DICREASE': return state - action.data;
        default: return state;
    }
};

const Exam = () => {
    // dispatch: 발송하다, 급송하다
    // -> 상태변화가 있어야 한다는 사실을 알리는 함수
    const [state, dispatch] = useReducer(reducer, 0);

    const onClickPlus = () => {
        // 인수: 상태가 어떻게 변화되길 원하는 지에 대한 정보
        dispatch({
            type: "INCREASE",
            data: 1,
        }); // -> 액션 객체
    };

    const onClickMinus =() => {
        dispatch({
            type: "DICREASE",
            data: 1,
        })
    }

    return(
        <div>
            <h1>{state}</h1>
            <button onClick={onClickPlus}>+</button>
            <button onClick={onClickMinus}>-</button>
        </div>
    );
};

export default Exam;