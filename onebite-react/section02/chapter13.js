// 프로미스란?
// 비동기 작업을 효율적으로 처리할 수 있도록 도와주는 자바스크립트의 내장 객체

// 프로미스는 비동기 작업을 감싸는 객체이다
// 효능: 비동기 작업 실행, 비동기 작업 상태 관리, 비동기 작업 결과 저장, 비동기 작업 병렬 실행, 비동기 작업 다시 실행 등등


//비동기 작업 실행, 비동기 작업 상태 관리, 비동기 작업 결과 저장, 집중 탐구 !!!

// 프로미스의 세가지 상태
// 대기: 아직 작업이 완료되지 않은 상태 Pending
// 성공: 비동기 작업이 성공적으로 마무리된 상태 Fulfilled
// 실패: 비동기 작업이 실패한 형태 Rejected

// 대기 -> 성공: resolve 해결
// 대기 -> 실패 reject 거부



function add10(){
    // (resolve, reject)
    const promise = new Promise((resolve, reject)=> {
        // 비동기 작업 실행하는 함수
        // executor
    
        setTimeout(()=>{
            const num = 10;
    
            if(typeof num === "number"){
                resolve(num+10);
            } else {
                reject("num이 숫자가 아닙니다.");
            }
    
            // console.log("안녕");
            // reject("왜 실패했는지 이유..."); // 안에 저장할 인수 넣어주기 (프로미스의 결과값)
        }, 2000);
        
    });

    return promise;
}

const p = add10(0);
p.then((result)=>{
    console.log(result);
    return add10(result);
    }).then((result)=>{
        console.log(result);
    }); // 새로운 프로미스 객체 반환
    // 듀..? 모르겠슨



// then 메서드
// 그 후에

// promise.then((value)=>{ // 성공 시에만 호출
//     console.log(value);
// }).catch((error)=>{ // 실패 시에만 호출
//     console.log(error); // 프로미스 체이닝
// });

// promise.catch((error)=>{ // 실패 시에만 호출
//     console.log(error);
// });

// setTimeout(()=>{
//     console.log(promise);
// }, 3000);