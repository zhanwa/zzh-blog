/*
 * @Description:
 * @Autor: zhangzhanhua
 * @Date: 2021-02-26 09:39:27
 * @LastEditors: zhangzhanhua
 * @LastEditTime: 2021-03-03 20:42:19
 */
import React, { useCallback, useState,useEffect } from 'react';
import { Form, Card, Input, Button,message } from 'antd';
import md5 from 'js-md5';
import './login.scss'
import {toLogin} from '@/api/login.js'
import {
    UserOutlined,
    LockOutlined,
} from '@ant-design/icons';
function Login(props) {
    const [userName, setUserName] = useState('') //用户名
    const [password, setPassword] = useState('') //密码
    const [loading, setLoading] = useState(false) //loading
    useEffect(()=>{
        console.log(process.env.NODE_ENV)
    },[])
    /**
     * @description:校验密码
     * @param {*} checkPassword
     * @return {*}
     * @author: zhangzhanhua
     */
    const checkPassword =  (rule, value) => {
        if(!value){
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
        setLoading(true)
        console.log(userName, password);
        let params = {
            userName:userName,
            password:md5(password),
        }
        toLogin(params).then(res=>{
            if(res.data.success){
                message.success(res.data.msg)
                sessionStorage.setItem('token',res.data.token)
                props.history.replace('/main')
            }
        })
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
                            rules={[{ required: true, message: '请输入用户名' }]}
                        >
                            <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="用户名" onChange={e=>{
                                setUserName(e.target.value)
                            }} />
                        </Form.Item>
                        <Form.Item
                            name="password"
                            rules={
                                [
                                    { required: true, message: '请输入密码' },
                                    { validator: checkPassword ,validateTrigger:'onBlur'}
                                ]
                            }
                        >
                            <Input.Password
                                prefix={<LockOutlined className="site-form-item-icon" />}
                                placeholder="密码"
                                onChange={e=>{
                                    setPassword(e.target.value)
                                }}
                            />
                        </Form.Item>
                        <Form.Item>
                            <Button type="primary" size="large" block  htmlType="submit" loading={loading}> 登 录 </Button>
                        </Form.Item>
                    </Form>
                </Card>

            </div>
        </div>
    );
}

export default Login;
