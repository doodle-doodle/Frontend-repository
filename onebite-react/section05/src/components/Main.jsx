// JSX 주의사항
// 1. 중괄호 내부에는 자바스크립트 표현식만 넣을 수 있다.
// (한 줄로써 값으로 볼 수 있는 것)
// 2. 숫자, 문자열, 배열 값만 렌더링 된다. (불린, undefined 안됨)
// 3. 모든 태그는 닫혀있어야 한다.
// 4. 최상위 태그는 반드시 하나여야만 한다.



// className -> class는 자바스크립트 예약어라서 사용할 수 없는 거임

import "./Main.css";

const Main = () => {
    // const number = 10;
    // const obj = {a: 1};

    const user = {
        name: "주유민",
        isLogin: true,
    };

    if(user.isLogin) {
        return (
            <div className="logout" >로그아웃</div>
        )
    } else {
        return <div> 로그인 </div>
    } // style코드는 카멜표기식으로 작성

    // return (
    //     <>
    //     {user.isLogin? (
    //         <div> 로그아웃 </div>
    //     ):(
    //         <div> 로그인 </div>
    //     )}
    //     </>
    // );
};

export default Main;
