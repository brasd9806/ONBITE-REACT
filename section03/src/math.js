// math 모듈
function add(a,b) {
    return a + b;
}

function sub(a,b) {
    return a - b;
}

// module.exports = {
//     add, // value값으로 사용되는 함수이름과 key값이 똑같을경우 함수의 이름만 적어도 됨. add: add
//     sub,
// }

export {add, sub}; // 객체를 리터널로 생성해서 내보냄

export default function multiply(a,b) { //이 multiply함수는 math.js모듈의 기본값이 됨.
    return a*b;
}