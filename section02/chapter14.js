// Async&amp;Await


// async
// 어떤 함수를 비동기 함수로 만들어주는 키워드
// 함수가 프로미스를 반환하도록 변환해주는 키워드

async function getData(){
    return new Promise((resolve, reject) => {
        setTimeout(()=> {
            resolve({
                name:"이고래",
                id:"winterload",
            });
        }, 1500);
    });
}

console.log(getData());


// await
// async 함수 내부에서만 사용이 가능한 키워드
// 비동기 함수가 다 처리되기를 기다리는 역할

async function printData(){
    const data = await getData(); 
     // then 메서드를 쓰지않아도 getData함수가 반환하는 이 promise가 종료되기 기다림.
    console.log(data);
}

printData();

