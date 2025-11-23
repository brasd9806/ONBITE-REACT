// 5가지 배열 변형 메서드
// 1. filter
// 기존 배열에서 조건을 만족하는 요소들만 필털이하여 새로운 배열로 반환

let arr1 = [
    {name : "이고래", hobby:"테니스"},
    {name : "홍길동", hobby:"테니스"},
    {name : "김효빈", hobby:"독서"},
];

const tennisPeople = arr1.filter((item)=> {
    if(item.hobby === "테니스") return true;
});

// 위와 동일
const tennisPeople1 = arr1.filter(
    (item)=> item.hobby === "테니스"
);



// 2. map
// 배열의 모든 요소를 순회하며서, 각각 콜백함수를 실행하고 그 결과값들을 모아서 새로운 배열로 반환
let arr2 = [1,2,3];
const mapResult = arr2.map((item, idx, arr)=> {
    return item * 2;
});

console.log(mapResult);

// map 메서드를 이용한 사례
let names = arr1.map((item) => item.name);

console.log(names);



// 3. sort
// 배열을 사전순으로 정렬하는 메서드
// sort메서드는 숫자로 되어있을 경우, 정렬이 정상적으로 이루어지 않을 수 있음.
let arr3 = ["b", "a", "c"];
arr3.sort(); 

console.log(arr3);

// 숫자의 대소 관계를 정리하고 싶다면 비교 기준을 설정하는 collbak 함수도 함께 넘겨줘야함
let arr33 = [10, 3, 5];
// 올림차순
arr33.sort((a, b) => {
    if(a > b) {
        // b가 a 앞에 와라
        return 1;
    }else if(a < b) {
        // a가 b 앞에 와라
        return -1;
    }else {
        // 두 값의 자리를 바꾸지마라
        return 0;
    }
});

console.log(arr33);

// 내림차순
arr33.sort((a, b) => {
    if(a > b) {
        // a가 b 앞에 와라
        return -1;
    }else if(a < b) {
        // b가 a 앞에 와라
        return 1;
    }else {
        // 두 값의 자리를 바꾸지마라
        return 0;
    }
});

console.log(arr33);



// 4. toSorted(가장 최근에 추가된 최신 함수)
// 원본 배열은 냅두고, 정렬된 새로운 배열을 반환하는 메서드
let arr5 = ["c", "a", "b"];
const sorted = arr5.toSorted();

console.log(arr5);
console.log(sorted);


// 5. join
// 배열의 모든 요소를 하나의 문자열로 합쳐서 반환하는 메서드
let arr6 = ["hi", "im", "winterload"];
const joined = arr6.join(" ");
console.log(joined);