/*
 * @Description: 
 * @Autor: zhangzhanhua
 * @Date: 2021-02-24 14:42:22
 * @LastEditors: zhangzhanhua
 * @LastEditTime: 2021-02-27 16:59:32
 */
import './App.css';
// import { Button } from 'antd';
import React from 'react'
import Login from './page/login/login.js' //登录页组件
import Main from './page/main/main.js' //Main主页组件

import { BrowserRouter as Router, Route, Link, Switch, Redirect } from 'react-router-dom'
function App() {
  return (
    <div className="App">
      <Router>
        {/* 新版本Link不允许放到Router外面 */}
        {/* <Link to={{
          pathname: "/login",
          // query的名字是自己取的
          state: {
            id:'sdsd'
          }
        }}>去登陆</Link> */}

        {/* Switch单一匹配,如果没有就是匹配到的路由都会显示出来 */}
        <Switch>
          {/*登录页*/}
          <Route exact path='/login' component={Login} />
          {/* main主页 */}
          <Route  path='/main' component={Main} /> 
          {/* 默认重定向到登录页 */}
          <Redirect from='/' to='/login'></Redirect>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
