/*
 * @Description: 
 * @Autor: zhangzhanhua
 * @Date: 2021-02-24 14:42:22
 * @LastEditors: zhangzhanhua
 * @LastEditTime: 2021-03-01 16:57:17
 */
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import store from "./store/index"; //引入store
import {Provider} from 'react-redux'
// ReactDOM.render(
  // <React.StrictMode> //StrictMode开启严格模式,可能会造成一些warning,先关闭
    // <App />
  //</React.StrictMode>
  // document.getElementById('root')

// );
ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root')) //全局挂载store


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
