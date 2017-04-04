import React from 'react';
import MobileHeader from './mobile_header';
import MobileFooter from './mobile_footer';
import { Tabs } from 'antd';
export default class MobileIndex extends React.Component{
    render(){
        return(
            <div>
                <MobileHeader/>
                <Tabs>
                    <Tabs.TabPane tab="头条" key="1">头条</Tabs.TabPane>
                    <Tabs.TabPane tab="社会" key="2">社会</Tabs.TabPane>
                    <Tabs.TabPane tab="国内" key="3">国内</Tabs.TabPane>
                    <Tabs.TabPane tab="国际" key="4">国际</Tabs.TabPane>
                    <Tabs.TabPane tab="娱乐" key="5">娱乐</Tabs.TabPane>
                    <Tabs.TabPane tab="体育" key="6">体育</Tabs.TabPane>
                    <Tabs.TabPane tab="科技" key="7">科技</Tabs.TabPane>
                    <Tabs.TabPane tab="时尚" key="8">时尚</Tabs.TabPane>
                </Tabs>
                <MobileFooter/>
            </div>
        );
    }
}
