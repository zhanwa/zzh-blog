/*
 * @Description: 
 * @Autor: zhangzhanhua
 * @Date: 2021-02-26 15:07:58
 * @LastEditors: zhangzhanhua
 * @LastEditTime: 2021-02-26 15:30:32
 */
import HttpRequest from './axios'
const baseUrl = " http://127.0.0.1:7001/";
const axios = new HttpRequest(baseUrl)
export default axios