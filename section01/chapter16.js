// 1. 상수 객채
const animal = {
    type: "고양이",
    name: "나비",
    color: "black",
};

animal.age = 2; //추가
animal.name = "까망이" // 수정
delete animal.color; //삭제

console.log(animal);
// => 상수에다가 프로퍼티를 저장해도 프로퍼티를 추가/수정/삭제하는 것은 가능하다!!!


// 2. 메서드
// -> 같이 함수인 프로퍼티를 말함
// 아래 3개 같은 메서드 표현 방식
const persone = {
    name: "이고래",
    // 메서드
    sayHi : function() {
        console.log("안녕!");
    },
};

const persone1 = {
    name: "이고래",
    // 메서드
    sayHi : () => {
        console.log("안녕!");
    },
};

const persone2 = {
    name: "이고래",
    // 메서드
    sayHi(){
        console.log("안녕!");
    },
};

person1.sayHi();
person2["sayHi"]();