import React from 'react';
import { Card } from 'antd';
import { Link } from 'react-router';

export default class PCNewsImageBlock extends React.Component{
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
            <div key={index} style={{ display: 'inline-block', marginRight: '10px' }}>
                <Link to={`details/${item.uniquekey}`} target="_blank">
                    <div className="custom-image">
                        <img style={{ display: 'block', width: '100px', height: '90px' }} src={item.thumbnail_pic_s} />
                    </div>
                    <div className="custom-card">
                        <h3 style={{ width: '100px', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{item.title}</h3>
                        <p>{item.author_name}</p>
                    </div>
                </Link>
            </div>
        ))
        :
        '没有新闻'
        return (
            <div className="topNewsImageList">
                <Card title={this.props.carTitle} bordered='true' style={{ width: this.props.width }}>
                    <ul className="newsImage_ul">
                        {newsList}
                    </ul>
                </Card>
            </div>
        )
    }
}
