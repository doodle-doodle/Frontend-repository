// 1. 배열의 구조분해할당
let arr = [1, 2, 3];

// let one = arr[0];
// let two = arr[1];
// let three = arr[2];

let [one, two, three, four =4 ] = arr;
console.log(one, two, three, four);

// 2. 객체의 구조분해할당
let person = {
    name:"주유민",
    age: 22,
    hobby: "영화보기",
};

let {
    age: myAge,
    hobby,
    name,
    food = "치킨",
    extra,
} = person;

// let {name, age, hobby, extra} = person;
console.log(name, myAge, hobby, food, extra); // extra= undefined


// 3. 객체 구조 분해 할당을 이용해서 함수의 매개변수를 받는 방법
const func = ({name, age, hobby, extra}) => {
    console.log(name, age, hobby, extra);
};

func(person); // 객체를 넘겼을 때만 중괄호와 함께 구조분해 할당을 받을 수 있다.