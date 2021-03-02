/*
 * @Description: 
 * @Autor: zhangzhanhua
 * @Date: 2021-02-26 09:39:27
 * @LastEditors: zhangzhanhua
 * @LastEditTime: 2021-02-26 15:52:47
 */
import React, { useCallback, useState } from 'react';
import { Form, Card, Input, Button } from 'antd';
import './login.scss'
import {getTestData} from '@/api/login.js'
import {
    UserOutlined,
    LockOutlined,
} from '@ant-design/icons';
function Login(props) {
    const [userName, setUserName] = useState('') //用户名
    const [password, setPassword] = useState('') //密码
    const [loading, setLoading] = useState(false) //loading
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
        getTestData().then(res=>{
            console.log(res);
            if(res.status === 200){
                setLoading(false)
                // replace不能回到上一级,适合登录后操作
                props.history.replace({pathname:'/main',state:{id:'234434'}})
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
