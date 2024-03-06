import React from "react"
import './App.css';
import { useNavigate } from "react-router-dom";

function App() {
  let history = useNavigate();

  //2.使いたい箇所でpushメソッドにURLを指定して、使用する
  function handleClick() {
    history("/patternA/sample001");
  }


    
  return (
    <div className="App">
      <div>Hello World</div>
      <br />
      <button onClick={() => history('/patternA/sample001')}>
      Go home
    </button>
    </div>
  );
}

export default App;
