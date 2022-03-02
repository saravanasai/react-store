import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'

ReactDOM.render(
  <Router>
    <Routes>
      <Route path="/" element={<Home/>} />
    </Routes>
  </Router>,
  document.getElementById('root')
);


function Home(){

  return (
    <div>
      <h1 >Test</h1>
    </div>
  )
}

reportWebVitals();
