// 1. if 조건문 (if문)
let num = 10;

if (num >= 10) {
    console.log("num은 10 이상입니다.");
    console.log("참입니다.");
}
else if(num >= 5){
    // 두번쨰 조건
    // else if 문은 갯수 제한 없음
}
else {
    // 조건이 거짓일 때 실행될 코드
}
// 무조건 if로 시작해서 else로 끝나야 함 혹은 else없이 if만


// 2. Switch 문
// -> if 문과 기능 자체는 동일
// -> 다수의 조건을 처리할 때 if문보다 더 직관적이다

let animal = "cat";

switch (animal) {
    case "cat": {
        console.log("고양이");
        break;
    }
    case "dog": {
        console.log("강아지");
        break;
    }   
    case "bear": {
        console.log("곰");
        break;
    }
    case "snake": {
        console.log("뱀");
        break;
    }
    case "tiger": {
        console.log("호랑이");
        break;
    } // 조건을 만족하는 코드가 나오면 그 아래의 모든 코드를 실행해준다
    // 그래서 모든 코드에 break를 추가로 달아줘야함
    default:
        console.log("그런 동물은 전 모릅니다.");
        // else문과 같은 역할
}
