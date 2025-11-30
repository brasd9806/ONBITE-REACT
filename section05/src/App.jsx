import './App.css'
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import Button from './components/Button';

// App 컴포넌트는 뿌리역할 하는 부모 컴포넌트임
function App() {

  const buttonProps={
    text : "메일",
    color:"red",
    a: 1,
    b: 2,
    c: 3,
  }

  return (
    <>
      <Button {...buttonProps} />
      <Button text={"카페"}/>
      <Button text={"블로그"}>
        <div>자식 요소</div>
        <Header />
      </Button>
    </>
  );
};

export default App;
