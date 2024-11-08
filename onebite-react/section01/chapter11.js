// 함수 선언

function greeting() {
    console.log("안녕하세요!");
}

// console.log("호출 전");
// greeting();
// console.log("호출 후")

function getArea(width, height) { // 매개변수

    function another () {
        console.log("another");
    }

    another(); // 함수 내에 다른 함수 출력 
    // 중첩 함수

    let area = width * height;

    return area; // 반환값
    // return을 만나면 반환 후 코드 종료, 이 아래에 코드 써도 동작하지 않는다.
}
getArea(10, 20); // 인수
// 인수의 값을 바꿔가며 동적으로 함수의 값을 바꿔 쓸 수 있다

let area1 = getArea(10, 20); // 200이 리턴값으로 반환되어 저장된다. 

// 함수의 호출 아래에 함수를 선언해도 오류가 발생하지 않는다 (중요)
// 호이스팅 기능 때문
// -> 끌어올리다 라는 뜻