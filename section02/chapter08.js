// 5가지요소 순회 및 탐색 메서드
// 1. forEach
// 모든 요소를 순회하면서, 각각의 요소에 특정 동작을 수행시키는 메서드
let arr1 = [1,2,3];

arr1.forEach(function(item, idx, arr) {
    console.log(idx, item *2);
});

let doubledArr = [];

arr1.forEach((item)=> {
    doubledArr.push(item * 2);
});

console.log(doubledArr);


// 2. includes
// 배열에 특정 요소가 있는지 확인하는 메서드
let arr2 = [1,2,3];
let isInclude = arr2.includes(3);

console.log(isInclude);


// 3. indexOf
// 특정 요소의 인덱스(위치)를 찾아서 반환하는 메서드
// 존재하지 않을 경우 -1 반환
let arr3 = [1,2,3];
let index = arr3.indexOf(2);  
console.log(index);


// 4. findIndex
// 모든 요소를 순회하면서, 콜백함수를 만족하는 그런 특정 요소의 인덱스(위치)를 반환하는 메서드
// 콜백함수를 만족하는 것 ? => 콜백함수가 참을 반환한다는 얘기임.
// 존재하지 않을 경우 -1 반환

// findIndex라는 요소가 왜 필요할까? 
// => indexOf 메서드는 객체 타입의 값들이 저장된 배열에서는 정확한 요소의 위치를 찾을 수가 없기 때문!

let arr4 = [1,2,3];
const finededIndex = arr4.findIndex((item)=>{
    if(item === 2) return true;
});

// 위에 조건식과 같음
const finededIndex1 = arr4.findIndex((item)=> item === 2);

console.log(finededIndex);


let objectArr = [
    {name: "이고래"},
    {name: "홍길동"},
];

console.log(objectArr.indexOf({name: "이고래"}));  // indexOf는 찾지못해서 -1반환

console.log(objectArr.findIndex((item)=>item.name === "이고래"));  // 0 반환



// 5. find
// 모든 요소를 순회하면서 콜백함수를 만족하는 요소를 찾는데, 요소를 그대로 반환
let arr5 = [
    {name: "이고래"},
    {name: "홍길동"},
];

const finded = arr5.find((item) => item.name === "홍길동");

console.log(finded); // {name : '홍길동'} 



ㅇㅇㅇ