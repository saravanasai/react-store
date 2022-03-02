import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import App from './App';
import Layout from './Layout/Layout';
import routes from './routes';

ReactDOM.render(
  <Router>
    <Routes>
      <Route path="/" element={<App/>} />
      
    </Routes>
  </Router>,
  document.getElementById('root')
);



reportWebVitals();
