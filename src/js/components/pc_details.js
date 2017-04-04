import React from 'react';
import { Link } from 'react-router';
import { Row, Col } from 'antd';
export default class PCDetails extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            newsItem: ''
        }
    }

    componentDidMount() {
        const myFetchOptions = {
            method: 'GET'
        }
        fetch("http://newsapi.gugujiankong.com/Handler.ashx?action=getnewsitem&uniquekey=" + this.props.params.uniquekey, myFetchOptions)
        .then(response => response.json()).then(json => {
            console.log(json);
            this.setState({
                newsItem: json
            });
            document.title = this.state.newsItem.title + "- React News";
        })
    }
    createMarkup() {
        return {__html: this.state.newsItem.pagecontent}
    }
    render(){
        return (
            <div>
                <Row>
                    <Col span={2}></Col>
                    <Col span={14} className="container">
                        <div className="articleContainer" dangerouslySetInnerHTML={this.createMarkup()}></div>
                    </Col>
                    <Col span={6}></Col>
                    <Col span={2}></Col>
                </Row>
            </div>
        )
    }
}
