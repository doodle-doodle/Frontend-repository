// 1. Falsy한 값
let f1 = undefined;
let f2 = null;
let f3 = 0;
let f4 = -0;
let f5 = NaN;
let f6 ="";
let f7 = 0n; // 매우 큰 수를 저장할 때 사용

if (!f2) {
    console.log("Falsy");
}


// 2. Trethy한 값
// -> 7가지 Falsy한 값을 제외한 나머지 모든 값
let t1 = "hello";
let t2 = 123;
let t3 = [];
let t4 = {};
let t5 = () => {};

if (t5) {
    console.log("Truthy");
}


// 3. 활용 사례
function printName(person) {
    // if(person === undefined || person === null) {  // 오류 방지
    //     console.log("person의 값이 없음");
    //     return;
    // }
    if (!person) {
        console.log("person의 값이 없음");
        return;
    }
    console.log(person.name);
}

let person;
printName(person);