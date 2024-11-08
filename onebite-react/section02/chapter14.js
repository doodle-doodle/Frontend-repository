// async
// 어떤 함수를 비동기 함수로 만들어주는 키워드
// 함수가 프로미스를 반환하도록 변환해주는 키워드

async function getData() { 
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve({
                name:"주유민",
                id:"22",
            });
        }, 1500);
    });

    // return {
    //     name: "주유민",
    //     id: "22",
    // };
}

console.log(getData());


// await
// async 함수 내부에서만 사용이 가능한 키워드
// 비동기 함수가 다 처리되기를 기다리는 역할

// -> then 메서드를 쓰지 않아도 알아서 프로미스가 종료되기를 라인에서 기다려준다.

async function printData(){
    const data = await getData();
    console.log(data);
};

printData();