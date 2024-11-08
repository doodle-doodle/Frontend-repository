// 1. 묵시적 형 변환
// -> 자바스크립트 엔진이 알아서 형 변환하는 것

let num = 10;
let str = "20";

const result = num + str; // num 값이 자동으로 문자열로 형 변환
console.log(result);


// 2. 명시적 형 변환
// -> 프로그래머 내장함수 등을 이용해서 직접 형 변환을 명시
// 문자열 -> 숫자

let str1 = "10";
let strToNum1 = Number(str1);
console.log(10+strToNum1);

let str2 = "10개";
let strToNum2 = Number(str2);
console.log(strToNum2); // output: NaN
let strToNum_2 = parseInt(str2); // 숫자 이외의 값이 포함된 문자열의 형 변환에 사용
// -> 숫자가 앞에 있어야 함
console.log(strToNum_2); // output: 10


// 숫자 -> 문자열

let num1 = 20;
let numToStr1 = String(num1);
console.log(numToStr1+"입니다.")