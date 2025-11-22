// 순회란? 배열, 객체에 저장된 여러개의 값에 순서대로 하나씩 접근하는 것

// 1. 배열 순회
let arr = [1,2,3];

// 1.1 배열 인덱스
for(let i=0; i<arr.length; i++) {
    console.log(arr[i]);
}

let arr2 = [4,5,6,7,8];
for(let i=0; i<arr2.length; i++){
    console.log(arr2[i]);
}


// 1.2 for of 반복문
// for of : 오직 배열을 순회하기 위해서 사용하는 반복문
for(let item of arr) {
    console.log(item);
}


// 2. 객체 순회
let person = {
    name: "이고래",
    age: 27,
    hobby: "테니스",
};

// 2.1 Object.keys 사용
// -> 객체에서 key 값들만 뽑아서 새로운 배열로 반환
let keys = Object.keys(person);

for(let i=0; i<keys.length; i++) {
    console.log(keys[i]);
}


for(let key of keys) {
    const value = person[key];
    console.log(key, value); // name 이고래 age 27...출력
}


// 2.2 Object.values
// -> 객체에서 value 값들만 뽑아서 새로운 배열로 반환
let values = Object.values(person);

for(let value of values){
    console.log(value);
}

// 2.3 for in : 객체에서만 사용할 수 있음
for(let key in person){
    const value = person[key];
    console.log(key, value); // name 이고래 age 27...출력
}

// => 여기서 주의할점! 
// ★ for of는 배열 순회, for in는 객체 순회에서만 사용가능하다!

zzz