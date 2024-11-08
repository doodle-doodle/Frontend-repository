// 1. Number Type

let num1 = 27;
let num2 = 1.5;
let num3 = -20;

console.log(num1 + num2);
console.log(num1 - num2);
console.log(num1 * num2);
console.log(num1 / num2); // 몫
console.log(num1 % num2); // 모듈러 연산(나머지)

let inf = Infinity;
let mInf = -Infinity;

let nan = NaN; // not number 수치연산 실패 시 결과값으로 사용된다.
console.log(1*"hello"); 
// 불가능한 수치의 연산이 실패해도 nan 결과값을 지원하기 때문에 프로그램의 종료를 막을 수 있다. 다른 언어에 비해 안전 



// 2. String Type
let myName = "주유민";
// 문자열의 덧셈연산을 지원한다.
let myLocation = "송도";
let introduce = myName + myLocation;
console.log(introduce);

let introduceText = `${myName}은 ${myLocation}에 거주합니다`; // template 리터럴 문법 (중요)
console.log(introduceText); 



// 3. Boolean Type
let isSwitchOn = true;
let isEmpty = false; // 주로 상태를 나타낼 때 사용


// 4. Null Type (아무것도 없다.)
let empty = null;
// 명시적으로 할당해주어야 한다.


// 5. Undefined Type
let none;
console.log(none);
// 변수를 선언하고 아무 값을 할당하지 않았을 때
// 변수를 초기화하지 않았거나 존재하지 않는 값을 불러오려 할 경우 

