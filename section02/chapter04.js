// 1. Spread 연산자
// -> Spread : 흩뿌리다, 펼치다 라는 뜻
// -> 객체 배열에 저장된 여러개의 값을 개별로 흩뿌려주는 역할

let arr1 = [1,2,3];
let arr2 = [4,...arr1, 5,6]; // ...arr1 이 Spread임
console.log(arr2);

// 객체에도 Spread 연산자 사용가능!
let obj1 = {
    a:1,
    b:2,
};

let obj2 = {
    ...obj1,
    c: 3,
    d: 4,
};

console.log(obj2);

// 함수를 호출할때도 자주 사용함!
function funcA(p1, p2, p3) {
    console.log(p1, p2, p3);
}

funcA(...arr1);


// 2. Rest 매개변수
// -> Rest 나머지라는 뜻. 나머지 매개변수
// -> ★ 주의!!! rest매개변수 뒤에는 추가적으로 매개변수를 더 선언할수 없음.
// -> 그이유는 rest매개변수는 지금부터 나오는 뒤에 모든 인수들을 다 배열에 저장하는 기능하기 때문에!
function funcB(one,...rest) {
    console.log(rest);  // 배열 형태로 저장됨
    // => [2,3] 출력됨. 1은 one이라는 변수에 저장되었기 때문.
};

funcB(...arr1);