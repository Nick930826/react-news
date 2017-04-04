import React from 'react';
import { Row, Col, Menu, Icon, Tabs, message, Form, Input, Modal, Button, CheckBox, InputNumber } from 'antd';
const FormItem= Form.Item;
class PCHeader extends React.Component{
    constructor(){
        super();
        this.state = {
            current: 'top',
            modalVisible: false,
            action: 'login',
            isLogin: false,
            userNickName: '',
            userId: 0
        };
    }
    setModalVisible(value) {
        this.setState({modalVisible: value});
    }
    handleClick(e) {
        if (e.key === 'register') {
            this.setState({current: 'register'});
            this.setModalVisible(true);
        } else {
            this.setState({current: e.key});
        }
    }
    handelSubmit(e) {
        e.preventDefault();
        var myFetchOptions = {
            method: 'GET'
        };
        var FormData = this.props.form.getFieldsValue();
        console.log('数据', FormData);
        fetch("http://newsapi.gugujiankong.com/Handler.ashx?action=register&username=username&password=password&r_userName="+ FormData.r_username +"&r_password="+ FormData.r_password +"&r_confirmPassword="+ FormData.r_confirmPassword)
        .then(response => response.json()).then(json =>{
            this.setState({
                userNickName: json.NickUserName,
                userId: json.UserId
            });
        })
        message.success('请求成功');
        this.setModalVisible(false);
    }
    render(){
        const { getFieldDecorator } = this.props.form;
        const userShow= this.state.isLogin
        ?
        <Menu.Item key="logout" className="register">
            <Button type="primary" htmlType="button">{this.state.userNickName}</Button>
            &nbsp;&nbsp;
            <Link target="_blank"><Button type="dashed" htmlType="button">个人中心</Button></Link>
            &nbsp;&nbsp;
            <Button type="ghost" htmlType="button" >退出</Button>
        </Menu.Item>
        :
        <Menu.Item key="register" className="register">
            <Icon type="appstore" />注册／登录
        </Menu.Item>;
        return(
            <header>
                <Row>
                    <Col span={2}></Col>
                    <Col span={4}>
                        <a href="/" className="logo">
                            <img src="./src/images/news.png" />
                            <span>ReactNews</span>
                        </a>
                    </Col>
                    <Col span={16}>
                        <Menu mode="horizontal" onClick={this.handleClick.bind(this)} defaultSelectedKeys={[this.state.current]}>
                            <Menu.Item key="top">
                                <Icon type="appstore" />头条
                            </Menu.Item>
                            <Menu.Item key="shehui">
                                <Icon type="usergroup-delete" />社会
                            </Menu.Item>
                            <Menu.Item key="guonei">
                                <Icon type="environment-o" />国内
                            </Menu.Item>
                            <Menu.Item key="guoji">
                                <Icon type="global" />国际
                            </Menu.Item>
                            <Menu.Item key="yule">
                                <Icon type="smile" />娱乐
                            </Menu.Item>
                            <Menu.Item key="tiyu">
                                <Icon type="safety" />体育
                            </Menu.Item>
                            <Menu.Item key="keji">
                                <Icon type="hourglass" />科技
                            </Menu.Item>
                            <Menu.Item key="shishang">
                                <Icon type="red-envelope" />时尚
                            </Menu.Item>
                            {userShow}
                        </Menu>
                        <Modal title="用户中心" wrapClassName="vertical-center-modal" visible={this.state.modalVisible}
                        onCancel={() => this.setModalVisible(false)}
                        onOk={() => this.setModalVisible(false)}
                        okText="关闭"
                        >
                            <Tabs type="card">
                                <Tabs.TabPane tab="注册" key="2">
                                    <Form layout='horizontal' onSubmit={this.handelSubmit.bind(this)}>
                                        <FormItem label="账户">
                                        {
                                            getFieldDecorator('r_username')(
                                            <Input type="text" placeholder="请输入您的账户" />
                                          )
                                        }
                                        </FormItem>
                                        <FormItem label="密码">
                                        {
                                            getFieldDecorator('r_password')(
                                            <Input type="password" placeholder="请输入您的密码" />
                                          )
                                        }
                                        </FormItem>
                                        <FormItem label="确认密码">
                                        {
                                            getFieldDecorator('r_confirmPassword')(
                                            <Input type="password" placeholder="请再次输入您的密码" />
                                          )
                                        }
                                        </FormItem>
                                        <Button type="primary" htmlType="submit">注册</Button>
                                    </Form>
                                </Tabs.TabPane>
                            </Tabs>
                        </Modal>
                    </Col>
                    <Col span={2}></Col>
                </Row>
            </header>
        );
    }
}
export default PCHeader = Form.create({})(PCHeader);
