// 콜백함수 : 자신이 아닌 다른 함수에, 인수로써 전달된 함수를 의미함
// ex)
function main(value) {

}

function sub() {
    console.log("sub");
}

main(sub); // main함수안에 sub이라는 함수호출. 이것이 바로 "콜백함수"

// 1. 콜백함수
function main1(value) {
    value();
    console.log("end");
}

// function sub1() {
//     console.log("i am sub");
// }

main1(() => {  // "i am sub" 출력 그후 "end"출력
    console.log("i am sub");
});


// 2. 콜백함수의 활용 / 중복 코드 발생하지 않게 효율적으로 사용 가능!
function repeat(count, collback) {
    for (let idx = 1; idx <= count; idx++) {
        collback(idx);
    }
}



repeat(5, (idx) => {
    console.log(idx);
});

repeat(5, function(idx) {
    console.log(idx * 2);
})