// 함수선언

function greeting () {
    console.log("안녕하세요!");
}

console.log("호출 전");
// greeting(); // 반드시 함수를 호출할때는 소괄호를 작성해주어야 한다.
console.log("호출 후");


getArea(10, 20); // 인수
let area1 = getArea(30, 20);
console.log(area1);

let area2 = getArea(120, 200);

// 호이스팅
// -> 끌어올리다 라는 뜻. 자바스크립트는 함수를 맨 아래에 있어도 호이스팅 되기때문에 사용할 수 있다.

// 직사각형의 넓이를 구하는 함수
function getArea(width, height){ // 매개변수(width, hegiht)
    let width = 10;
    let height = 20;
    
    function another() { // 중첩함수
        console.log("another");
    }
    
    another();
    let area = width * height;
    

    return area; // 반환값
}
