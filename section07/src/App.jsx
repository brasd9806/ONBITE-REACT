import './App.css';
import Viewer from './components/Viewer';
import Controller from './components/Controller';
import {useState, useEffect, useRef} from 'react';
import Even from './components/Even';

function App() {

  const [count, setCount] = useState(0);
  const [input, setInput] = useState("");

  const isMount = useRef(false);

// 라이프 사이클 :
// 1. 마운트 : 탄생  
// 최초로 한번만 실행하고 싶을 때, deps로 빈배열을 전달하면 됨
useEffect(()=> {
  console.log("mount");
}, []);

// 2. 업데이트 : 변화, 리렌더링
// 배열 생략
useEffect(()=> {
  if(!isMount.current){
    isMount.current = true;
    return;
  }

  console.log("update");
});

// 3. 언마운트 : 죽음
// Even.jsx 컴포넌트 참고



  // ★★ useEffect는 count 값이 바뀔때마다 첫번째 인자로 전달한 콜백함수를 실행시키게 됨
  // 의존성 배열 dependency array(deps)
  // useEffect(()=>{
  //   console.log(`count: ${count} / input: ${input}`);
  // }, [count, input]);


  const onClickButton = (value) => {
    setCount(count + value);
  }

  return (
    <div className='App'>
      <h1>Simple Counter</h1>
      <section>
        <input value={input} onChange={(e)=>{
          setInput(e.target.value);
        }}/>
      </section>
      <section>
        <Viewer count={count} />
        {count % 2 === 0 ? <Even /> : null}
      </section>
      <section>
        <Controller onClickButton={onClickButton}/>
      </section>
    </div>
  )
}

export default App
