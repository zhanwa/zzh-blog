import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch, Redirect } from 'react-router-dom'


function D1(props) {
    return (
        <div>
            D1
        </div>
    );
}

function D2(props) {
    return (
        <div>
            D2
        </div>
    );
}

function Test(props) {
    return (
        <div>
            <ul>
                <li><Link to='/main/d1'>111</Link></li>
                <li><Link to='/main/d2'>222</Link></li>
            </ul>
            <div className="router">
                xxxxxxx
            <Route exact path='/main/d1' render={()=>{return D1}} /> 
            <Route exact path='/main/d2'  render={()=>{return D2}} /> 
            </div>
        </div>
    );
}

export default Test;