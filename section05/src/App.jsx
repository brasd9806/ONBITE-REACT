import './App.css'
import {useState} from "react";

import Register from "./components/Register";


// App 컴포넌트는 뿌리역할 하는 부모 컴포넌트임
function App() {

  //useState(값, 함수) 첫번째: 현재값, 두번째:상태를 변화시키는 함수
   
  

  return (
    <>
        {/* Button.jsx 실습 내용
        <Button {...buttonProps} />
        <Button text={"카페"}/>
        <Button text={"블로그"}>
        <div>자식 요소</div>
        <Header />
        </Button> */}

        <Register />
    </>
  );
};

export default App;
