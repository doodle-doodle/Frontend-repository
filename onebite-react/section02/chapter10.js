// 1. Date 객체를 생성하는 방법
let date1 = new Date(); // 셍성자 함수 
// 현재 시간 저장댐
console.log(date1);

let date2 = new Date("1997-01-07/10:10:10"); // -, ., /로 구분 가능 (시간은 /와 :)
console.log(date2);

// 2. 타임 스탬프 - 간단한 숫자로 표현이 가능해서 잘 사용된다고 함
// 특정 시간이 "1970.01.01 00시 00분 00초" UTC로부터 몇 ms가 지났는 지를 의미하는 숫자값
let ts1 = date1.getTime();
console.log(ts1);

let date4 = new Date(ts1);
console.log(date1, date4); // 둘이 같은 시간 저장


// 3. 시간 요소들을 추출하는 방법
let year = date1.getFullYear();
let month = date1.getMonth();
let date = date1.getDate();

let hour = date1.getHours();
let minute = date1.getMinutes();
let seconds = date1.getSeconds();
// 자바스크립트의 월은 0부터 시작된다. (즉 1월은 0으로 표시됨)
// 헷갈리지 않도록 getMonth()로 추출한 값에 +1을 해서 변경해서 사용하도록 하자


// 4. 시간 수정하기
date1.setFullYear(2023);
date1.setMonth(2); // 3월임
date1.setDate(30);

date1.setHours(23);
date1.setMinutes(59);
date1.setSeconds(59);

console.log(date1);


// 5. 시간을 여러 포맷으로 출력하기
console.log(date1.toDateString()); // 날짜만 출력
console.log(date1.toLocaleString()); // 시간이 현지화되어 출력