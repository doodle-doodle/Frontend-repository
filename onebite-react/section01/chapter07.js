// 1. 대입 연산자 =
let var1 = 1; // 값 저장

// 2. 산술 연산자
// +, -, *, /, % (*, /, %가 우선순위가 높다.)

// 3. 복합 대입 연산자 (산술 + 대입을 한 번에 !)
let num2 = 10;
num2 = num2 + 20;
num2 += 20;
num2 -= 20;
// = 앞에 모든 산술 연산자가 올 수 있다.

// 4. 증감 연산자 
let num3 = 10;
num3++; // 이 라인이 끝나고 나서야 +1이 된다 
console.log(num3++); // 출력 시기에는 +1이 안됨 - 전위 연산
console.log(++num3) // 즉시 그 줄에서 +1 - 후위 연산 


// 5. 논리 연산자
let or = true || false;
let and = true && true;
let not = !true;
console.log(or, and, not);


// 6. 비교 연산자
let comp1 = 1 === 2; // 같은지? true
let comp2 = 1 !== 2; // 다른지? 다르니까 false 
console.log(comp1, comp2); 
// == : 자료형까지 같은지는 비교할 수 없고 값 자체만 비교
let comp3 = 1 == "1"; // true가 나와버린다
// === : 자료형이 같은지까지 비교
let comp4 = 2 > 1; 
let comp5 = 2 < 1;
// <=, >=



