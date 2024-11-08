function funcA() {
    console.log("funA");
}

let varA = funcA; // 호출() 한게 아니라 그냥 함수 자체를 넣은 것
varA(); // 함수 자체가 출력된다. (함수 호출)

// 이러한 자바스크립트의 특징을 활용하면 함수를 굳이 선언하지 않고 변수에 담듯이 만들 수 있다.

let varB = function funcB() {
    console.log("funcB");
};
// 함수로 선언된 것이 아니기 때문에 funcB 즉 함수의 이름으로 호출할 수 없다
// 그래서 익명함수로 작성이 가능하다.
// 값으로 함수 선언 : 함수 표현식
// 호이스팅 불가능


// 2. 화살표 함수
let varC = function() {
    return 1;
};

let varC_ = () => {
    return 1;
} // 이게 함수

let varC__ = (value) => {
    value + 1
    console.log(value);
    

};

console.log(varC__(10));