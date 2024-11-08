// 5가지의 요소 순회 및 탐색 메서드

// 1. forEach
// 모든 요소를 순회하며 각각의 요소에 특정한 동작을 수행시키는 메서드
let arr1 = [1, 2, 3];

arr1.forEach(function (item, idx, arr) {
    console.log(idx, item * 2);
}); // 콜백함수

let doubledArr = [];
arr1.forEach((item)=> {
    doubledArr.push(item*2);
});

console.log(doubledArr);


// 2. includes
// 배열에 특정 요소가 있는지 확인하는 메서드
let arr2 = [1, 2, 3];
let isInclude = arr2.includes(3);

console.log(isInclude); // 없는 요소라면 false 반환


// 3. indexOf
// 특정 요소의 인덱스(위치)를 찾아서 반환하는 메서드
let arr3 = [1,2,3];
let index = arr3.indexOf(2);
console.log(index);
// 만약 찾는 값이 여러개라면 앞에 있는 인덱스를 반환 (앞에서부터 탐색하기 때문에)
// 배열에 존재하지 않는 값의 인덱스를 요청할 경우 -1을 반환해준다.


// 4. findIndex
// 특정 요소의 인덱스(위치)를 반환하는 메서드이다
// 모든 요소를 순회하면서, 콜백함수를 만족하는 그런 특정 요소의 인덱스를 반환하는 메서드이다.
let arr4 = [1, 2, 3];
const findedIndex = arr4.findIndex((item)=>{
    item % 2 !== 0 // 연산식을 반환하도록 할 수 있다.
    // if (item === 2)
    //     return true;
}); // 콜백함수 만족 = 콜백함수가 참을 반환한다는 뜻
// 조건을 만족하는 요소 없을 경우 -1 반환

console.log(findedIndex);

// findIndex 메서드가 필요한 이유
// indexOf는 객체 타입의 값이 저장된 배열에서는 정확한 요소의 위치를 찾아낼 수 없기 때문이다.
let objectArr = [
    {name: "주유민"},
    {name: "김예원"}, 
];

console.log(
    objectArr.indexOf({ name:"주유민"})
); // 결과 -1 (얕은 비교)

console.log(
    objectArr.findIndex(
        (item) => item.name === "주유민"
    )
); // 결과 0 (깊은 비교)

// indexOf라는 메서드는 특정 값을 배열에서 찾을 때 무조건 얕은 비교로만 진행하기 때문에 이러한 객체 값은 찾지 못하는 반면
// findIndex는 콜백함수를 이용해서 직접 특정 프로퍼티의 값을 기준으로 비교시킬 수 있기 때문에 
// 복잡한 객체 값도 조건식만 잘 만든다면 쉽게 찾아낼 수 있다는 장점을 가집니다.


// 5. find
// 모든 요소를 순회하면서 콜백함수를 만족하는 요소를 찾는데, 요소를 그대로 반환한다.
let arr5 = [
    {name: "주유민"},
    {name: "김예원"},

];

const finded = arr5.find((item) => item.name === "주유민");
console.log(finded); // 주유민 빈환
