
// 1. 변수
let name; // 초기화 하지 않은 변수 선언 가능
// 중복된 이름의 변수 재선언 불가능
let age = 22; // 변수 선언 및 초기화
console.log(age);
console.log(name); // undefined

age = 80;
console.log(age); 


// 2. 상수
// 저장된 값을 바꿀 수 없다.
const birth = "2003.09.22";
// birth = "1"; -> 오류
// 선언과 동시에 초기화를 해주어야 한다. 


// 3. 변수 명명규칙(네이밍 규칙)
// 3-1. $, _ 제외한 기호는 사용할 수 없다.
let $_name;

// 3-2. 숫자로 시작할 수 없다.
let name2;
let _2name; // error

// 3-3. 예약어를 사용할 수 없다.



// 4. 변수 명명 가이드
let a = 1;
let b = 1;
let c = a-b;

let saleCount = 1;
let refundCound = 1;
let totalSalesCount = saleCount - refundCound;
