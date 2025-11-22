function returnFalse() {
    console.log("False 함수");
    return false;
}

function returnTrue() {
    console.log("True 함수");
    return true;
}

console.log(returnFalse() && returnTrue());  
// => False함수까지만 console에 출력되고 두번째 함수는 호출되지 않음.


// 단락 평가 활용 사례
function printName(person) {
    const name = person && person.name;
    console.log(name || "person의 값이 없음");
    // 단락 평가에 의해서 person값이 undefined나 null이면 두번째 함수는 호출되지 않음.
}

printName();  // person의 값이 없음 출력
printName({name: "이고래"}); // 이고래 출력