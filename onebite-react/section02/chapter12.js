// 1. 콜백함수
// function add(a, b, callback) {
//     setTimeout(()=> {
//         const sum = a+ b; // = 3
//         callback(sum);
//     }, 3000);
// }
// // 비동기 작업을 하는 함수의 결과 값을 함수의 외부에서 이용하고 싶다면
// // 이러한 방식으로 콜백함수를 사용해서 이 비동기 험수 안에서 콜백함수를 호출하도록 설정해준다.

// add(1, 2, (value)=> {
//     console.log(value);
// })


// 음식을 주문하는 상황
function orderFood(callback) {
    setTimeout(()=>{
        const food = "떡볶이";
        callback(food);
    }, 3000);
}

function cooldownFood(food, callback) {
    setTimeout(()=>{
        const cooldownedFood = `식은 ${food}`;
    }, 2000);
}

function freezeFood(food, callback) {
    setTimeout(()=>{
        const freezedFood = `냉동된 ${food}`;
        callback(freezeFood)
    }, 1500);
}

orderFood((food)=> {
    console.log(food);

    cooldownFood(food, (cooldownedFood)=>{
        console.log(cooldownedFood);

        freezeFood(cooldownedFood, (freezedFood)=>{
            console.log(freezedFood);
        });
    });  
}); // 비동기 작업의 결과를 또다른 비동기 작업의 인수로 전달할 수도 있음
// 3초(음식 조리 시간) + 2초(음식 식는 시간) + 1.5초(음식 어는 시간)

// 콜백지옥!!!!!