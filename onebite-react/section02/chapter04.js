// 1. Spread 연산자
// 흩뿌리다, 펼치다 라는 뜻
// 객체나 배열에 저장된 여러개의 값을 개별로 흩뿌려주는 역할을 한다.

let arr1 = [1, 2, 3];
// let arr2 = [4, arr1[0], 5, arr1[1], 6, arr1[2]]; // 원래 사용하던 방식
// console.log(arr2);

let arr2 = [4, ...arr1, 5, 6];
console.log(arr2);

let obj1 = {
    a:1,
    b:2,
};

let obj2 = {
    ...obj1,
    c: 3,
    d: 4,
};

console.log(obj2);


function funcA(p1, p2, p3) {
    console.log(p1, p2, p3)
}

funcA(...arr1);


// Rest 매개변수
// 나머지 매개변수
function funcB(one, ...rest) { // rest 매개변수가 반드시 마지막에 오도록 설정해야한다. 
    console.log( rest);
}

funcB(...arr1);
