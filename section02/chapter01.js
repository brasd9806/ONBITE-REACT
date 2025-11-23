// 1. Falsy한 값 -> 조건문에서는 거짓으로 평가됨
let f1 = undefined;
let f2 = null;
let f3 = 0;
let f4 = -0;
let f5 = NaN;
let f6 = "";
let f7 = 0n;

if(!f2) {
    console.log("falsy");  // => console 출력됨. 
}

// 2. Truthy한 값
// -> 7가지 Falsy 한 값들 제외한 나머지 모든 값
let t1 = "hello";
let t2 = 123;
let t3 = [];
let t4 = {};
let t5 = () => {};

// 3. 활용 사례
function printName(person) {
    if(!person) { // Falsy한 값을 이용하면 비효율적인 조건물을 좀 더 간결하게 개선가능
    // if(person === undefined || person === null) {
        console.log("person의 값이 없음");
        return;
    }
    console.log(person.name);   // => console에 "이고래" 출력
}

let person = {name : "이고래"};
printName(person);
