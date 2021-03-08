import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import HomeJs from './HomeJs';
import JsDatas from './Js-Datas'
import ProtoPage from './ProtoPage';
import TodoPage from './Todo/TodoPage';

ReactDOM.render(
  <React.StrictMode>
    <App />
    <HomeJs />
    <JsDatas />
    <ProtoPage />
    <TodoPage />
  </React.StrictMode>,
  document.getElementById('root')
);



