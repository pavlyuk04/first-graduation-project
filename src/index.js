import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Home from './Components/Home/Home'
import About from './Components/About/About'
import './App.css';
import { BrowserRouter as Router,
Switch,
Route,
Link
} from "react-router-dom"


ReactDOM.render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>,
  document.getElementById('root')
);



