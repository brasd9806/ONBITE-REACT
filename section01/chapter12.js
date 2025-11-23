// 함수 표현식과 화살표 함수

// 1. 함수 표현식
function funcA(){
    console.log("funcA");
}

let varA = funcA;

console.log(varA); // -> 함수자체가 출력됨. 함수자체를 변수에 담을 수있다!
varA(); // funcA 출력

let varB = function funcB() { // 익명함수 : 이름이 없는 함수
    console.log("funcB");
};
// => 값으로써 취급이 된다. 대신, 호이스팅 취급안됨

varB();


// 2. 화살표 함수
let varC = () => {
    return 1;
}

let varD = () => 1; // 위에거와 똑같다.
console.log(varC()); // 1 출력

let varE = (value) => value + 1;
console.log(varE(10)); // 11 출력

let varF = (value) => {
    console.log(value);  // 10 출력
    return value + 1;  // 11
}
console.log(varF(10)); // 11 출력