/**
 * @description: 用redux原生api来写
 * @param {*}
 * @return {*}
 * @author: zhangzhanhua
 */
// import React, { useState, useCallback,useEffect } from 'react';
// import { Input, Button, List } from 'antd'
// import "./toDoList.scss"
// import store from "../../store/index"; //引入store
// function ToDoList(props) {
//     const [storeStDate, setStoreDate] = useState(store.getState())
//     const [workTip, setWorkTip] = useState('')//输入框
//     useEffect(() => {
//         store.subscribe(storeChange)
//     },[])
//     const storeChange=()=>{
//         console.log(22222);
//         setStoreDate(store.getState())
//     }


//     /**
//      * @description: 增加工作
//      * @param {*} addWorking
//      * @return {*}
//      * @author: zhangzhanhua
//      */
//     const addWorking = ()=>{
//         // console.log(workTip);
//         store.dispatch({
//             type:'addWorking',
//             content:workTip
//         })
//     }
//     /**
//      * @description: 删除working
//      * @param {*} delItem 删除的序号
//      * @return {*}
//      * @author: zhangzhanhua
//      */
//     const delItem=(index)=>{
//         store.dispatch({
//             type:'delWorking',
//             index:index
//         })
//     }
//     return (
//         <div className='toDoList'>
//             <div className="search">
//                 <Input placeholder={storeStDate.inputTip} className='inputLeft' value={workTip} onChange={(e)=>setWorkTip(e.target.value)}></Input>
//                 <Button type='primary' onClick={addWorking}>增加</Button>
//             </div>
//             <List
//                 bordered
//                 dataSource={storeStDate.workContent}
//                 renderItem={
//                     (item,index) => (<List.Item><span>{index}.{item}</span><Button onClick={()=>{delItem(index)}}>删除</Button></List.Item>)
//                 }
//             />
//         </div>
//     );
// }

// export default ToDoList;

/**
 * @description: class类来比较一下
 * @param {*}
 * @return {*}
 * @author: zhangzhanhua
 */
// import React, { Component } from 'react';

// class TodoList extends Component {
//     constructor(props) {
//         super(props)
//         this.state = Object.assign(store.getState(), { value: '' })
//         // this.changeInputValue = this.changeInputValue.bind(this)
//         this.storeChange = this.storeChange.bind(this)
//         //关键代码------------start----------
//         // this.clickBtn = this.clickBtn.bind(this)
//         //关键代码------------end----------
//         store.subscribe(this.storeChange) //订阅Redux的状态
//     }
//     setWorkTip(value) {
//         this.setState(Object.assign(store.getState(), { value: value }))
//     }
//     delItem(index) {
//         console.log(index);
//     }
//     addWorking() {
//         store.dispatch({
//             type: 'addWorking',
//             content: '2222222222222'
//         })
//     }
//     storeChange(){
//         console.log('store changed')
//         this.setState(store.getState())
//     }
//     render() {
//         return (
//             <div className='toDoList'>
//                 <div className="search">
//                     <Input placeholder={this.state.inputTip} className='inputLeft' value={this.state.value} onChange={(e) => this.setWorkTip(e.target.value)}></Input>
//                     <Button type='primary' onClick={()=>this.addWorking()}>增加</Button>
//                 </div>
//                 <List
//                     bordered
//                     dataSource={this.state.workContent}
//                     renderItem={
//                         (item, index) => (<List.Item><span>{index}.{item}</span><Button onClick={() =>  this.delItem(index) }>删除</Button></List.Item>)
//                     }
//                 />
//             </div>
//         );
//     }
// }

// export default TodoList;

// /**
//  * @description: 使用react-redux
//  * @param {*}
//  * @return {*}
//  * @author: zhangzhanhua
//  */
// import React, { useState, useCallback, useEffect } from 'react';
// import { Input, Button, List } from 'antd'
// import { connect } from "react-redux";
// import "./toDoList.scss"
// function ToDoList(props) {
//     // const [storeStDate, setStoreDate] = useState(store.getState())
//     const [workTip, setWorkTip] = useState('')//输入框
//     useEffect(() => {

//     }, [])
//     return (
//         <div className='toDoList'>
//             <div className="search">
//                 <Input placeholder={props.inputTip} className='inputLeft' value={workTip} onChange={(e) => setWorkTip(e.target.value)}></Input>
//                 <Button type='primary' onClick={()=>{props.addWorking(workTip)}}>增加</Button>
//             </div>
//             <List
//                 bordered
//                 dataSource={props.workContent}
//                 renderItem={
//                     (item, index) => (<List.Item><span>{index}.{item}</span><Button onClick={() => { props.delWorking(index) }}>删除</Button></List.Item>)
//                 }
//             />
//         </div>
//     );
// }
// const stateToProps = (state) => { //把store里面的state映射到函数的props上,这样就可以用props调用state的属性了,需要暴露的时候使用connect第一个参数
//     return {
//         inputTip: state.inputTip,
//         workContent: state.workContent
//     }
// }

// const dispatchToProps = (dispatch) => { //把store里面的action的派发映射到函数的props上,这样就可以用props改变action了,需要暴露的时候使用connect的第二个参数
//     return {
//         addWorking(workTip = 111) {
//             let action = {
//                 type: 'addWorking',
//                 content: workTip
//             }
//             dispatch(action) //派发action到reducer
//         },
//         delWorking(index) {
//             console.log(index);
//             let action = {
//                 type: 'delWorking',
//                 index: index
//             }
//             dispatch(action) //派发action到reducer
//         }
//     }
// }
// export default connect(stateToProps, dispatchToProps)(ToDoList);

/**
 * @description: 使用react-redux 新 api useSelector useDispatch
 * @param {*}
 * @return {*}
 * @author: zhangzhanhua
 */
import React, { useState, useCallback, useEffect } from 'react';
import { Input, Button, List } from 'antd'
import { useSelector, useDispatch } from "react-redux";
import { getToDoListData } from '@/api/login.js'
import "./toDoList.scss"
function ToDoList(props) {
    // const [storeStDate, setStoreDate] = useState(store.getState())
    const [workTip, setWorkTip] = useState('')//输入框
    const state = useSelector(state => state) //使用store的state
    const dispatch = useDispatch()//返回Redux store中对dispatch函数的引用
    useEffect(() => {

        // console.log(counter);
        // getToDoListData().then(res=>{
        //     console.log(res);
        //     let action = {
        //         type: 'initWorking',
        //         content: res.data
        //     }
        //     dispatch(action)
        // })
        const initWorking = () => { //有了thunk中间件,可以返回一个函数给action,以前只能派发一个对象
            return (dispatch) => {
                getToDoListData().then(res => {
                    let action = {
                        type: 'initWorking',
                        content: res.data
                    }
                    dispatch(action) //这个dispatch是thunk中间件的,把action传给reducer
                })
            }

        }
        let action = initWorking()
        dispatch(action) //这里的dispatch是把返回的函数传给中间件,中间件接到了action是一个函数,就会自动执行该函数
    }, [dispatch])
    /**
     * @description: 增加工作
     * @param {*} addWorking
     * @return {*}
     * @author: zhangzhanhua
     */
    const addWorking = () => {
        let action = {
            type: 'addWorking',
            content: workTip
        }
        dispatch(action) //调用useDispatch生产的实例可以派发action来修改reducer
        setWorkTip('')
    }
    /**
     * @description: 删除working
     * @param {*} delItem 删除的序号
     * @return {*}
     * @author: zhangzhanhua
     */
    const delItem = (index) => {
        let action = {
            type: 'delWorking',
            index: index
        }
        dispatch(action)
    }
    return (
        <div className='toDoList'>
            <div className="search">
                <Input placeholder={state.inputTip} className='inputLeft' value={workTip} onChange={(e) => setWorkTip(e.target.value)}></Input>
                <Button type='primary' onClick={addWorking}>增加</Button>
            </div>
            <List
                bordered
                dataSource={state.workContent}
                renderItem={
                    (item, index) => (<List.Item><span>{index}.{item}</span><Button onClick={() => delItem(index)}>删除</Button></List.Item>)
                }
            />
        </div>
    );
}


export default ToDoList;