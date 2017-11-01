import React, {Component} from 'react';
import styles from './styles';
import MyFooter from '../../footer';
import _ from 'lodash';
import MainMenu from '../../main-menu';
import Layout from 'antd/lib/layout';
import Row from 'antd/lib/row';
import Col from 'antd/lib/col';
import {Helmet} from "react-helmet";
import StackGrid from "react-stack-grid";
import {articles} from './data';
import ArticleItem from './article-item';


const {Header, Footer, Content} = Layout;

class InMedia extends Component {

    render() {
        const title = `Elliot Cardin - Dans les médias`;
        const description = `Ultra-trail, course d'endurance, végétalien.`;
        const pageUrl = `http://elliotcardin.com/in-media`;
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
                    <meta property="og:image" content="http://elliotcardin.com/elliot-upclose.jpg"/>
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
                        <Col xs={18} offset={3}>
                            <StackGrid
                                columnWidth={300}
                                gutterWidth={10}
                            >
                                {
                                    _.map(articles, article=> <ArticleItem article={article}/>)
                                }
                            </StackGrid>
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

export default InMedia;
