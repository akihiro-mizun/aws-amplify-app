import React from "react"
import './App.css';
//import { useNavigate } from "react-router-dom";
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Home from './pages/Home';
import About from './pages/About';
import Contents from './pages/Contents';

function App() {
  //let history = useNavigate();

  //2.使いたい箇所でpushメソッドにURLを指定して、使用する
  //function handleClick() {
  //  history("/patternA/sample001");
  //}

  //<button onClick={() => history('/patternA/sample001')}>
  //Go home
  //</button>
    
  return (
    <BrowserRouter>
      <div>Hello World</div>
      <br />
    <Routes>
      <Route path={`/`} element={<Home />} />
        <Route path={`/about`} element={<About />} />
        <Route path={`/contents`} element={<Contents />} />
    </Routes>
  </BrowserRouter>
  );
}

export default App;
