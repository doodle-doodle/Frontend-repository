// 순회란? lteraion
// 배열, 객체에 저장된 여러개의 값에 순서대로 하나씩 접근하는 것

// 반복문을 활용한 배열, 객체 순회
// 1. 배열 순회
let arr = [1, 2, 3];

// 1.1 배열 인덱스
for (let i=0; i < arr.length; i++) {
    console.log(arr[i]);
}

let arr2 = [4, 5, 6, 7, 8];
for (let i = 0; i <arr2.length;i++) {
    console.log(arr2[i])
}

// 1.2 for of 문
// 오직 배열을 순회하기 위한 특수한 반복문
for (let item of arr) {
    console.log(item);
}

// 2. 객체 순회
let person = {
    name: "주유민",
    age: 22,
    hobby: "영화보기",
};

// 2.1 Object.keys 사용
// 객체에서 key값들만 뽑아서 새로운 배열로 반환
let keys = Object.keys(person);
for (let key of keys) {
    const value = person[key];
    console.log(key, value);
    // console.log(key, person[key]) // key와 value 동시 순회
}

// Object.values
// 객체에서 value 값들만 뽑아서 새로운 배열로 반환
let values = Object.values(person);
for (let value of values) {
    console.log(value);
}


// 2.3 for in
// 객체만을 위해 존재하는 특수한 반복문 
for (let key in person) {
    const value = person[key];
    console.log(key, value);
}