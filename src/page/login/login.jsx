/*
 * @Description:
 * @Autor: zhangzhanhua
 * @Date: 2021-02-26 09:39:27
 * @LastEditors: zhangzhanhua
 * @LastEditTime: 2021-07-16 16:26:18
 */
import React, { useCallback, useState, useEffect } from 'react';
import { Form, Card, Input, Button, message } from 'antd';
import md5 from 'js-md5';
import './login.scss'
import { toLogin } from '@/api/login.js'
import {
    UserOutlined,
    LockOutlined,
} from '@ant-design/icons';
function Login(props) {
    const [userName, setUserName] = useState('') //用户名
    const [password, setPassword] = useState('') //密码
    const [passwordCommit, setPasswordCommit] = useState('') //密码
    const [accNo, setAccNo] = useState('') //账号
    const [loading, setLoading] = useState(false) //loading
    useEffect(() => {
        console.log(process.env)
        console.log(process.env.NODE_ENV)
        console.log(process.env.REACT_APP_BASE_URL);
    }, [])
    /**
     * @description:校验密码
     * @param {*} checkPassword
     * @return {*}
     * @author: zhangzhanhua
     */
    const checkPassword = (value) => {
        if (!value) {
            return Promise.resolve('密码不能为空')
        }
        if (value.length < 6) {
            return Promise.reject('密码不能少于6位数')

        } else {
            return Promise.resolve()
        }
    }
    /**
     * @description: 登录
     * @param {*}
     * @return {*}
     * @author: zhangzhanhua
     */
    const checkLogin = () => {
        // setLoading(true)
        // let params = {
        //     userName: userName,
        //     password: password ? md5(password) : '',
        //     accNo: accNo
        // }
        // toLogin(params).then(res=>{
        //     setLoading(false)
        //     if(res.data.success){
        //         message.success(res.data.msg)
        //         sessionStorage.setItem('token',res.data.token)
        //         props.history.replace('/main')
        //     }else{
        //         message.error(res.data.msg)
        //     }
        // })
        const request = new XMLHttpRequest()
        const url = "http://127.0.0.1:1314/admin/loginTest"
        request.open('post', url)
        request.setRequestHeader('content-type', 'application/x-www-form-urlencoded');
        let params = `userName=${userName}&password=${password}&accNo=${accNo}&passwordCommit=${passwordCommit}`
        request.send(params)
        request.onload = function() {
            let data = JSON.parse(this.responseText)
            if(data.success){
                console.log(data.data.accNo);
                message.success(data.msg)
                // sessionStorage.setItem('token',res.data.token)
                props.history.push('/main')
            }else{
                message.error(data.msg)
            }
        }
    }

    return (
        <div className='login'>
            <div className="loginContainer">
                <Card title="zzh blog login" bordered={true} style={{ width: 400 }} >
                    <Form
                        name="login"
                        className="login-form"
                        initialValues={{ remember: true }}
                        onFinish={checkLogin}
                    >
                        <Form.Item
                            name="username"
                        // rules={[{ required: true, message: '请输入用户名' }]}
                        >
                            <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="用户名" onChange={e => {
                                setUserName(e.target.value)
                            }} />
                        </Form.Item>
                        <Form.Item
                            name="password"
                        // rules={
                        //     [
                        //         { required: true, message: '请输入密码' },
                        //         { validator: checkPassword ,validateTrigger:'onBlur'}
                        //     ]
                        // }
                        >
                            <Input.Password
                                prefix={<LockOutlined className="site-form-item-icon" />}
                                placeholder="密码"
                                onChange={e => {
                                    setPassword(e.target.value)
                                }}
                            />
                        </Form.Item>
                        <Form.Item>
                            <Button type="primary" size="large" block htmlType="submit" loading={loading}> 登 录 </Button>
                        </Form.Item>
                        <Form.Item
                            name="accNo"
                        >
                            <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="账号" onChange={e => {
                                setAccNo(e.target.value)
                            }} />
                        </Form.Item>
                        <Form.Item
                            name="passwordCommit"
                        >
                            <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="确认密码" onChange={e => {
                                setPasswordCommit(e.target.value)
                            }} />
                        </Form.Item>
                    </Form>
                </Card>

            </div>
        </div>
    );
}

export default Login;
