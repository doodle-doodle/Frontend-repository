// 1. 콜백함수
// 자신이 아닌 다른 함수에 인수로써 전달된 함수를 의미한다.

function main(value) {
    console.log(1);
    console.log(2);
    value();
    console.log("end");

};

main(() => {
    console.log("i am sub") // value 부분
});

function sub() {
    console.log("i am sub");
}

// main(sub); // sub함수 자체 코드가 출력된다.
// sub함수: 콜백함수 (나중에 실행되는...)
// 원할 때 실행할 수 있다.


// 2. 콜백함수의 활용
function repeat(count, callback) {
    for (let idx = 1; idx <= count; idx++) {
        callback(idx);
    }
};

repeat(5, (idx) => {
    console.log(idx);
});

repeat(5, (idx) => {
    console.log(idx * 2);
});


// function repeatDouble(count) {
//     for (let idx = 1; idx <= count; idx++) {
//         console.log(idx * 2)
//     }
// };

repeat(5);
// repeatDouble(5);

// 중복코드를 발생하지 않게 코드를 작성할 수 있다.