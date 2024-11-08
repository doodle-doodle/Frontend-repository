// 반복문
// for

for (let idx=0; idx < 5; idx++) { // (초기식(뱐수, counter변수라고도 함) ; 조건식(언제까지 반복할 건 지) ; 증감식)
    console.log("반복!")
}

for (let idx=0; idx <= 10; idx++) {
    console.log(idx);

    if (idx >= 5) {
        break; // 강제 종료
    }
}

// 반복의 특정 회차 건너뛰기
// 짝수회차 건너뛰기
for (let idx = 0; idx <= 10; idx++){
    if(idx % 2 === 0){
        continue; // 반복문 내의 다른 코드를 시행하지 않고 다음 회차로 넘어간다 
    }
    console.log(idx);
}
