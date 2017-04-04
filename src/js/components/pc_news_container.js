import React from 'react';
import PCNewsBlock from './pc_news_block';
import PCNewsImageBlock from './pc_news_image_block';
import { Row, Col, Menu, Icon, Tabs, message, Form, Input, Modal, Button, CheckBox, InputNumber, Carousel } from 'antd';
const FormItem= Form.Item;
export default class PCNewsContainer extends React.Component{
    render(){
        const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            autoplay: true
        }
        return(
            <div>
                <Row>
                    <Col span={2}></Col>
                    <Col span={20} className="container">
                        <div className="leftContainer">
                            <div className="carousel">
                                <Carousel {...settings}>
                                    <div><img src="./src/images/hzw1.jpeg" /></div>
                                    <div><img src="./src/images/hzw2.jpeg" /></div>
                                    <div><img src="./src/images/hzw3.jpeg" /></div>
                                </Carousel>
                            </div>
                            <PCNewsImageBlock carTitle="娱乐新闻" count={6} type="yule" width="400px" />
                        </div>
                        <Tabs className="tabs_news">
                            <Tabs.TabPane tab="新闻" key="1">
                                <PCNewsBlock count={22} type="top" width="100%" bordered="false"/>
                            </Tabs.TabPane>
                            <Tabs.TabPane tab="国际" key="2">
                                <PCNewsBlock count={22} type="guoji" width="100%" bordered="false"/>
                            </Tabs.TabPane>
                        </Tabs>
                        <PCNewsImageBlock carTitle="社会
                        新闻" count={8} type="shehui" width="100%" />
                        <PCNewsImageBlock carTitle="科技新闻" count={8} type="keji" width="100%" />
                    </Col>
                    <Col span={2}></Col>
                </Row>
            </div>
        );
    }
}
