const Button = ({text, color}) => {
    // console.log(props)

    const onClickButton = (e) => {
        console.log(e); // SyntheticBaseEvent: 합성 이벤트 객체
        console.log(text);
    };

    return (
        <button 
            onClick={onClickButton}
            // onMouseEnter={onClickButton}
            style={{color: color}}>
            {text}-{color}
        </button>
    );
};

Button.defaultProps = {
    color: "black",
};

export default Button;


// 6.4
// props로 어떤 값이 무조건 들어올거라고 생각하고 코드를 짜는 것은 위험하다
// 기본값 설정이 가능