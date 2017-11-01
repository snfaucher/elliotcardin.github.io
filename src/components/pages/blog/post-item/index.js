import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Col from 'antd/lib/col';
import Card from 'antd/lib/card';
import styles from './styles';

class PostItem extends Component {


    render() {
        const {post} = this.props;
        const {id, title, url, cover} = post;

        return (
            <div key={post} {...styles}>
                <Card bodyStyle={{padding:'0'}}>
                    <Col span={8}>
                        <div className="cover" style={{backgroundImage : `url(${cover})`}}></div>
                    </Col>
                    <Col span={16}>

                        <div className="content">
                            <div className="title">
                                <a href={url}>{title}</a>
                            </div>
                        </div>
                    </Col>
                </Card>
            </div>
        );
    }
}

PostItem.propTypes = {
    post: PropTypes.object.isRequired
};

export default PostItem;