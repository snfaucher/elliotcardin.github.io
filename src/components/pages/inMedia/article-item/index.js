import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Col from 'antd/lib/col';
import Card from 'antd/lib/card';
import styles from './styles';

class ArticleItem extends Component {


    render() {
        const {article} = this.props;
        const {title, url, cover, publisher, date} = article;

        return (
            <div key={article} {...styles}>
                <Card bodyStyle={{padding:'0'}}>
                    <div className="cover" style={{backgroundImage : `url(${cover})`}}></div>
                    <div className="content">
                        <div className="date">
                            {date}
                        </div>
                        <div className="title">
                            <a target="_blank" href={url}>{title}</a>
                        </div>
                    </div>
                    <a href={publisher.website}>
                        <div className="publisher">
                            <div>{publisher.name}</div>
                            {
                                publisher.logo &&
                                <div>
                                    <img src={publisher.logo} width='70px' height={`${publisher.logoHeight ? publisher.logoHeight : 'auto'}`}/>
                                </div>
                            }
                        </div>
                    </a>
                </Card>
            </div>
        );
    }
}

ArticleItem.propTypes = {
    article: PropTypes.object.isRequired
};

export default ArticleItem;
