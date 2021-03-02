/*
 * @Description: redux状态管理
 * @Autor: zhangzhanhua
 * @Date: 2021-03-01 10:36:24
 * @LastEditors: zhangzhanhua
 * @LastEditTime: 2021-03-01 15:07:57
 */
import { createStore ,applyMiddleware,compose} from "redux"; //applyMiddleware是中间件,有了中间件才可以用中间件插件 //因为createStore只能传两个参数,要用compose增强函数,合并两个中间件插件
import thunk from 'redux-thunk' //中间件插件
import reducer from './reducer.js' //引入reducer,(其实可以写在同一个文件,但为了方便管理才拆开)
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) :compose 
const enHancer = composeEnhancers(applyMiddleware(thunk)) //同时使用thunk和redux-dev-tool
const store = createStore(reducer,enHancer
    
)//创建仓库(这里类似于vue的 Vue.use)

export default store //把仓库暴露出去