// 1. 객체 생성
let obj1 = new Object() // 객체 생성자
let obj2 = {}; // 객체 리터럴 (대부분 사용)

// 2. 객체 프로퍼티 (객체 속성)
// key : value
let persone = {
    name : "이고래",
    age : 28,
    hobby : "테니스",
    job: "FE Developer",
    extra: {},
    10: 20,
    "like cat": true,
};

// 3. 객체 프로퍼티를 다루는 방법
// 3.1 특정 프로퍼티에 접근 (점 표기법, 괄호 표기법)
let name = persone.name;  // 점 표기법
console.log(name); // 이고래

let age = persone["age"]; // 괄호 표기법
console.log(age); // 28

// 프로퍼티를 동적으로 변화시키면서 꺼내와야할 떄는 괄호표기법을 이요하는 것 이 좋음
let property = "hobby";
let hobby = persone[property];
console.log(hobby); // 테니스


// 3.2 새로운 프로퍼티를 추가하는 방법
persone.job = "fe developer";
person["favoriteFood"] = "떡볶이";

console.log(persone);


// 3.3 프로퍼티를 수정하는 방법
person.job = "educator";
person["favoriteFood"] = "초콜릿";


// 3.4 프로퍼티를 삭제하는 방법
delete person.job;  // job 삭제
delete person["favoriteFood"]; // favoriteFood 삭제


// 3.5 프로퍼티의 존재 유무를 확인하는 방법 (in 연산자)
// name이라는 프로퍼티가 persone이라는 객체 안에 있는지
let result1 = "name" in persone; // true
let result2 = "cat" in persone;  // false
console.log(result1);