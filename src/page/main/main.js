/*
 * @Description: 系统主页
 * @Autor: zhangzhanhua
 * @Date: 2021-02-26 15:40:35
 * @LastEditors: zhangzhanhua
 * @LastEditTime: 2021-03-28 21:12:36
 */
import React, { useState } from 'react';
import { Layout, Menu } from 'antd';
import logo from '@/asset/img/icon.jpg'
import './main.scss'
import Artical from '../artical/artical.js'
import Home from '../home/home.jsx' //系统首页
import ToDoList from '../toDoList/toDoList.jsx' //toDolist页
import Mheader from "./component/header.jsx";//头部组件
import { BrowserRouter as Router, Link, Route, Switch, Redirect } from 'react-router-dom'
import {
    MenuUnfoldOutlined,
    MenuFoldOutlined,
    UserOutlined,
    VideoCameraOutlined,
    UploadOutlined,
} from '@ant-design/icons';
const { Header, Sider, Content, Footer } = Layout;
function Main(props) {
    const [collapsed, setCollapsed] = useState(true)
    /**
     * @description: 侧边栏拉伸
     * @param {*} toggle
     * @return {*}
     * @author: zhangzhanhua
     */
    const toggle = () => {
        setCollapsed(!collapsed)
    };
    /**
     * @description: 侧边栏路由跳转
     * @param {*} goToUrl
     * @return {*}
     * @author: zhangzhanhua
     */
    const goToUrl = () => {
        console.log(props.history);
        props.history.push({ pathname: '/main/home' })
    }
    return (
        <div className='main'>
            <div className="mainContainer">
                <Layout>
                    <Sider trigger={null} collapsible collapsed={collapsed} className='sider'>
                        <div className="logo" onDoubleClick={toggle}>
                            <img src={logo} alt="" />
                        </div>
                        <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
                            <Menu.Item key="1" icon={<UserOutlined />}>
                                <Link to="/main/home">Flutter教程</Link>
                            </Menu.Item>
                            <Menu.Item key="2" icon={<VideoCameraOutlined />} onClick={goToUrl}>
                                文章列表页
                            </Menu.Item>
                            <Menu.Item key="3" icon={<UploadOutlined />}>
                                <Link to="/main/artical">Flutter教程</Link>
                            </Menu.Item>
                            <Menu.Item key="4" icon={<UploadOutlined />}>
                                <Link to="/main/toDoList">ToDoList</Link>
                            </Menu.Item>
                        </Menu>
                    </Sider>
                    <Layout className="site-layout">
                        <Header className="site-layout-background" style={{ padding: 0 }}>
                            <Mheader></Mheader>
                        </Header>
                        <Content
                            className="contenClass"
                        >

                            {/* Switch单一匹配,如果没有就是匹配到的路由都会显示出来 */}
                            <Switch>

                                {/* 首页 */}
                                <Route exact path='/main/home' component={Home} />
                                {/* artical页 */}
                                <Route exact path='/main/artical' component={Artical} />
                                {/* toDoList */}
                                <Route exact path='/main/toDoList' component={ToDoList} />
                                {/* 默认重定向到首页 */}
                                <Redirect from='/main' to='/main/home'></Redirect>
                            </Switch>

                        </Content>
                        <Footer className='mainFooter' style={{ textAlign: 'center' }}>个人博客-由react-hooks,Antd驱动</Footer>
                    </Layout>
                </Layout>
            </div>
        </div>
    );
}

export default Main;