import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory } from 'react-router';
import { Button } from 'antd';
import PCIndex from './components/pc_index';
import PCDetails from './components/pc_details'
import MobileIndex from './components/mobile_index';
import MediaQuery from 'react-responsive';
import 'antd/dist/antd.css';

export default class Root extends React.Component{
    render(){
        return(
            <div>
                <MediaQuery query='(min-device-width: 1224px)'>
                    <Router history={hashHistory}>
                        <Route path="/" component={PCIndex}></Route>
                        <Route path="/details/:uniquekey" component={PCDetails}></Route>
                    </Router>
                </MediaQuery>
                <MediaQuery query='(max-device-width: 1224px)'>
                    <MobileIndex/>
                </MediaQuery>
            </div>
        );
    }
}
ReactDOM.render(<Root/>, document.getElementById('mainContainer'));
