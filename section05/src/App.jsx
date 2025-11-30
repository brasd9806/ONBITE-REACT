import './App.css'
import {useState} from "react";

// App 컴포넌트는 뿌리역할 하는 부모 컴포넌트임
function App() {

  //useState(값, 함수) 첫번째: 현재값, 두번째:상태를 변화시키는 함수
  const [count, setCount] = useState(0); 
  const [light, setLight] = useState("OFF");

  return (
    <>
        {/* Button.jsx 실습 내용
         <Button {...buttonProps} />
        <Button text={"카페"}/>
        <Button text={"블로그"}>
        <div>자식 요소</div>
        <Header />
        </Button> */}
      <div>
        <h1>{light}</h1>
        <button onClick={() => {
          setLight(light === "ON" ? "OFF" : "ON");
        }}>
          {light === "ON" ? "끄기" : "켜기"}
          </button>
      </div>
      
      <div>
        <h1>{count}</h1>
        <button onClick={()=>{
          setCount(count+1);
        }}>
        +
        </button>
      </div>
    </>
  );
};

export default App;
