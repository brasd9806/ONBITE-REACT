// Promise란? 비동기 작업을 효율적으로 처리할 수 있도록 도와주는 자바스크립트의 내장 객체
// => 비동기 자업들을 랩핑하는, 즉 감싸는 객체임. 
// 감싸고 있는 비동기 작업을 실행, 비동기 작업 상태 관리, 비동기 작업 병렬 실행, 다시 실행 등등...

// Promise의 3가지 상태 : 대기/성공/실패


// executor에는 2가지 매개변수를 전달함.
// resolve는 promise 작업을(비동기작업) 성공상태로 바꾸는 함수가 들어있음
// reject 실패상태로 바꾸는 함수가 들어있음

function add10(num) {
    const promise = new Promise((resolve, reject) => {
        // 비동기 작업 실행하는 함수
        // executor
    
        setTimeout(() => {
           
    
            if(typeof num === 'number') {
                resolve(num + 10);
            }else {
                reject("num이 숫자가 아닙니다");
            }
    
            // resolve("안녕1");  // 비동기 성공
            reject("왜 실패했는지 이유..."); // 비동기 실패
        }, 2000);
    });

    return promise;
}



// then 메서드
// -> 그 후에
// promise에서 resolve를 호출하게 되면, 그 후에 then 메서드에 전달한 이 콜백함수를 실행시켜줌
// 만약 promise에서 reject가 호출이 된다면? then 메서드는 실행X 

// promise
//     .then((value) => {
//     console.log(value);
//     })
//     .catch((error) => {  // 실패는 catch메서드 
//         console.log(error);
//     });

const p = add10(0);
p.then((result) => {
    console.log(result);

    const newP = add10(result);
    return newP;  // 이렇게 반환을 해주면 그때는 이 then메서드의 결과값이 됨.
}).then((result) => {
    console.log(result);
}).catch((error) => {
    console.log(error);
});


// 위와 결과값 동일(간단하게 작성한 것)
add10(0)
    .then((result) => {
        console.log(result);

        return add10(result);
    })
    .then((result) => {
        console.log(result);
    })
    .catch((error) => {
        console.log(error);
    });


