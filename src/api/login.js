/*
 * @Description: 登录页接口
 * @Autor: zhangzhanhua
 * @Date: 2021-02-26 15:10:08
 * @LastEditors: zhangzhanhua
 * @LastEditTime: 2021-03-03 20:09:25
 */
import axios from '@/lib/http.request.js'
//获取测试数据
export const getTestData = (data) => {
    return axios.request({
      url: 'admin/index',
      params:data,
      method: 'get',
    })
  }
  export const getToDoListData = (data) => {
    return axios.request({
      url: 'admin/todolist',
      params:data,
      method: 'get',
    })
  }

  //登录
  export const toLogin = (data) => {
    return axios.request({
      url: 'admin/login',
      data,
      method: 'post',
    })
  }