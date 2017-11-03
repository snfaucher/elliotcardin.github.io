import React, {Component} from 'react';
import _ from 'lodash';
import styles from './styles';
import MyFooter from '../../footer';
import MainMenu from  '../../main-menu';
import Layout  from 'antd/lib/layout';
import Row from 'antd/lib/row';
import Col from 'antd/lib/col';
import {Helmet} from "react-helmet";
import {posts} from './data';
import PostItem from './post-item';


const {Header, Footer, Content} = Layout;

class Blog extends Component {


    render() {
        const title = `Blog - Elliot Cardin`;
        const description = `Blog - Elliot Cardin`;
        const pageUrl = `https://elliotcardin.com/blog`;

        return (
            <Layout {...styles}>
                <Helmet>
                    <title>{title}</title>
                    <meta charset="utf-8"/>
                    <meta http-equiv="x-ua-compatible" content="ie=edge"/>
                    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"/>

                    <meta name="robots" content="index,follow"/>

                    <meta name="googlebot" content="index,follow"/>

                    <link rel="canonical" href={pageUrl}/>
                    <meta name="description" content={description}/>

                    <meta property="og:url" content={pageUrl}/>
                    <meta property="og:type" content="website"/>
                    <meta property="og:title" content={title}/>
                    <meta property="og:image" content="https://elliotcardin.com/elliot-upclose.jpg"/>
                    <meta property="og:description" content={description}/>
                    <meta property="og:site_name" content='Elliot Cardin'/>
                    <meta property="og:locale" content='fr'/>
                </Helmet>
                <Header className="header">
                    <MainMenu
                        fixed={false}
                        darkTheme={true}
                    />
                </Header>
                <Content>
                    <Row className="page-content">
                        <Col sm={{span : 12, offset:6}} xs={24}>
                            <div className="blogCover" style={{backgroundImage:`url(/elliot-upclose.jpg)`}}>
                                <div className="caption">Blog</div>
                            </div>
                            {
                                _.map(posts, post => <PostItem post={post} key={post.id}/>)
                            }
                        </Col>
                    </Row>
                </Content>
                <Footer>
                    <div className="home__footer">
                        <MyFooter/>
                    </div>
                </Footer>
            </Layout>

        );
    }
}

export default Blog;
