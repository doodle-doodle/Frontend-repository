// short-circuit evaluation 단락평가란?
// AND나 OR 연산식에서 두번째 피연산자에 접근하지 않아도 연산이 가능한 상황에서 
// 두번쨰 피연산자에 접근하지 않는 특징( 연산의 결과는 이미 확정되어 있기 때문에 아예 접근을 하지 않는다)

function returnFalse() {
    console.log("False 함수")
    return undefined;
}

function returnTrue() {
    console.log("True 함수")
    return 10;
}

console.log(returnFalse() && returnTrue()); // AND 연산
// returnTrue()는 호출되지도 않는다


// 단락평가 활용 사례
function printName(person) {
    const name = person && person.name;
    console.log(name || "person의 값이 없음");
    //console.log(person && person.name); // 오류 방지 더 간단하게 !
}

printName();
printName({name: "주유민"});
