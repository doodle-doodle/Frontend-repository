// 1. 상수 객체
const animal = {
    type: "고양이",
    name: "나비",
    color: "black"
}

animal.age = 2; //추가
animal.name = "까망이" //수정
delete animal.color; // 삭제

// 객체 자체를 다른 것으로 재할당하는 것은 불가능하지만
// 객체의 프로퍼티를 수정하는 것은 가능하다


// 2. 매서드
// 값이 함수인 프로퍼티를 말한다
const person = {
    name: "주유민",
    // 매서드 선언
    sayHi() {
        console.log("안녕!");
    }, 
};
// 매서드는 객체의 동작을 정의할 때 사용된다
// 함수가 아닌 프로퍼티가 객체의 정보를 담고있다면, 함수 프로퍼티는 매서드로서 객체의 동작을 정의한다고 이해

person.sayHi();
person[sayHi]();