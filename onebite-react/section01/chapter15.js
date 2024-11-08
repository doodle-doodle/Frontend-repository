// 객체를 이용하면 현실세계에 존재하는 어떤 사물이나 개념을 표현하기가 용이하다.

// 1. 객체 생성
let obj1 = new Object() // 객체 생성자 
let obj2 = {}; // 객체 리터럴 (대부분 사용)

let person = {
    name: "주유민", // 객체 프로퍼티 (key: value) 정보를 담고있다.
    age: 22,
    hobby: "영화 감상",
    extra: {},
    10: 20,
    "like cat": true,
}
// 프로퍼티의 value에는 불린타입, 함수, 객체 등이 올 수 있다. 
// value는 자료형의 타입 제한이 없다.
// key에는 문자열, 숫자만 올 수 있고 띄어쓰기가 있는 문자를 사용할 떄는 ""로 감싸주어야 한다.


// 3. 객체 프로퍼티를 다루는 방법
// 3.1 특정 프로퍼티에 접근( 점 표기법, 괄호 표기법)
let name = person.name;
console.log(name); // type.js 관련 --작대기

let age = person["age"] // 쌍따옴표 없을 경우 변수로 인식됨

let property = "hobby";
let hobby = person[property];
console.log(hobby);

// 3.2 새로운 프로퍼티를 추가하는 방법
person.job = "fe developer";
person["favoriteFood"] = "치킨";

console.log(person);


// 3.3 프로퍼티를 수정하는 방법
person.job = "educator";
person["favoriteFood"] = "양념치킨";

// 3.4 프로퍼티를 삭제하는 방법
delete person.job;
delete person["favoriteFood"];

// 3.5 프로퍼티의 존재 유무를 확인하는 방법 (in 연산자)
let result1 = "name" in person; // name이라는 프로퍼티가 in 오른쪽의 객체 안에 존재하는지를 묻는다
console.log(result1); // true
let result2 = "cat" in person // false