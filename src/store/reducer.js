/*
 * @Description: 仓库的具体操作地方
 * @Autor: zhangzhanhua
 * @Date: 2021-03-01 10:39:35
 * @LastEditors: zhangzhanhua
 * @LastEditTime: 2021-03-01 22:16:41
 */
const defaultState = {
    inputTip: 'input working',
    workContent: [

    ],
}//默认的state值
const reducer = (state = defaultState, action) => {
    let newState = JSON.parse(JSON.stringify(state))

    // action是外面调用dispatch函数穿过来的值,可以用来和state结合,生产一个新值传递出去,但是state是不能改变的
    if (action.type === "addWorking") {

        newState.workContent.push(action.content)
        //  console.log(newState);
        return newState
    }
    if (action.type === "delWorking") {
        // let newState = JSON.parse(JSON.stringify(state))

        newState.workContent = newState.workContent.filter((item, index) => index !== action.index)
        return newState
    }
    if (action.type === "initWorking") {


        newState.workContent = action.content
        return newState
    }
    return state //这个就是仓库中的state值(ps:****state是不能被改变的,只能改变export出去的值***)
}
export default reducer
