import React from 'react';
import { Card } from 'antd';
import { Link } from 'react-router';

export default class PCNewsBlock extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            news: ''
        }
    }

    componentWillMount() {
        const myFetchOptions = {
            method: 'GET'
        }
        fetch("http://newsapi.gugujiankong.com/Handler.ashx?action=getnews&type="+ this.props.type +"&count=" + this.props.count, myFetchOptions)
        .then(response => response.json()).then(json =>{
            this.setState({
                news: json
            });
        })
    }
    render(){
        const { news } = this.state;
        const newsList = news.length
        ?
        news.map((item, index) => (
            <li key={index}>
                <Link to={`details/${item.uniquekey}`} target="_blank">{item.title}</Link>
            </li>
        ))
        :
        '没有新闻'
        return (
            <div className="topNewsList">
                <Card>
                    <ul className="news_ul">
                        {newsList}
                    </ul>
                </Card>
            </div>
        )
    }
}
