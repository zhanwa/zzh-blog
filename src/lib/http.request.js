/*
 * @Description:
 * @Autor: zhangzhanhua
 * @Date: 2021-02-26 15:07:58
 * @LastEditors: zhangzhanhua
 * @LastEditTime: 2021-02-26 15:30:32
 */
import HttpRequest from './axios'
const baseUrl = process.env.NODE_ENV == 'development'?"http://127.0.0.1:1314/":'http://www.zzwa.top:2021/';
const axios = new HttpRequest(baseUrl)
export default axios
