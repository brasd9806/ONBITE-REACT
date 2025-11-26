function task(a, b, callback){
    setTimeout(() => {
        const sum = a + b;
        callback(sum);
    },3000);
}

task(1, 2, (value)=>{    // 콜백함수가 value라는 매개변수 받아서 출력하도록 설정
    console.log(value);
});


// 음식을 주문하는 상황
function orderFood(callback){
    setTimeout(() => {
        const food = "떡볶이";
        callback(food);
    }, 3000);
}


// 음식을 시키는 사람
function cooldownFood(food, callback) {
    setTimeout(() => {
        const cooldownFood = `식은 ${food}`;
        callback(cooldownFood);
    }, 2000);
}


function freezeFood(food, callback) {
    setTimeout(() => {
        const freezeFood = `냉동된 ${food}`;
        callback(freezeFood);
    }, 1500);
}


orderFood((food) => {
    console.log(food);

    cooldownFood(food, (cooldownFood)=> {
        console.log(cooldownFood);

        freezeFood(cooldownFood, (value) => {
            console.log(value);
        })
    });
    
})