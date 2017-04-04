import React from 'react';
import { Link } from 'react-router';
import { Row, Col, Menu, Icon, Tabs, message, Form, Input, Modal, Button, CheckBox, InputNumber } from 'antd';
const FormItem= Form.Item;
class MobileHeader extends React.Component{
    constructor(){
        super();
        this.state = {
            modalVisible: false,
            action: 'login',
            isLogin: false,
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
    login() {
        this.setModalVisible(true);
    }
    render(){
        const { getFieldDecorator } = this.props.form;
        const userShow = this.state.isLogin ?
        <Link>
            <Icon type="inbox" />
        </Link>
        :
        <Icon type="setting" onClick={this.login.bind(this)} />
        return(
            <div id="mobileheader">
                <header>
                    <img src="./src/images/news.png" />
                    <span>ReactNews</span>
                    {userShow}
                </header>
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
            </div>
        );
    }
}
export default MobileHeader = Form.create({})(MobileHeader);
