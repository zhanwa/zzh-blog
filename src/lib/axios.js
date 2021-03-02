/*
 * @Description: 封装axios
 * @Autor: zhangzhanhua
 * @Date: 2021-02-26 14:56:05
 * @LastEditors: zhangzhanhua
 * @LastEditTime: 2021-02-26 15:31:55
 */
import axios from "axios";
class HttpRequest {
  constructor(baseUrl) {
    this.baseUrl = baseUrl; //基础请求地址
  }
  getInsideConfig() {
    const config = {
      baseURL: this.baseUrl,
      headers: {},
    };
    return config;
  }
 
  interceptors(instance) {
    // 请求拦截
    instance.interceptors.request.use(
      (config) => {
        let TOKEN = window.sessionStorage.getItem("token");
        // 请求头加token
        if (TOKEN) {
          config.headers["token"] = TOKEN;
        } 
        return config;
      },
      (error) => {
        return Promise.reject(error);
      }
    );
    // 响应拦截
    instance.interceptors.response.use(
      (res) => {
        const { data, status } = res; //稍微处理一下返回的数据
        return { data, status };
      },
      (error) => {
        return Promise.reject(error);
      }
    );
  }
  request(options) {
    const instance = axios.create(); //创建axios实例
    options = Object.assign(this.getInsideConfig(), options); //合并请求参数,options在this.getInsideConfig()后面,后面的参数会覆盖前面的,故可以在外面自定义传参数,因为可以覆盖
    this.interceptors(instance); //配置请求拦截和响应拦截
    return instance(options); //返回自定义的axios实例
  }
}
export default HttpRequest;
