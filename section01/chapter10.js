for (let idx=0; idx <= 10; idx++) {
    if (idx % 2 === 0) {
        continue;
    }

    console.log(idx);

    if(idx >= 5) {
        break; // 반복을 강제로 종료해야할 때 break 이용
    }
}

