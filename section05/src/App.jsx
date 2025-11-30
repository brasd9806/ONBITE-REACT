import './App.css'
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';


// App 컴포넌트는 뿌리역할 하는 부모 컴포넌트임
function App() {
  return (
    <>
      <Header />
      <Main />
      <Footer />
    </>
  );
};

export default App;
