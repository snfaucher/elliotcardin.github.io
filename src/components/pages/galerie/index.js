import React, {Component} from 'react';
import styles from './styles';
import MyFooter from '../../footer';
import MainMenu from  '../../main-menu';
import Layout from 'antd/lib/layout';
import Row from 'antd/lib/row';
import Col from 'antd/lib/col';
import Spin from 'antd/lib/spin';
import {Helmet} from "react-helmet";

const {Header, Footer, Content} = Layout;

class Galerie extends Component {


    render() {
        const title = `Galerie photos - Elliot Cardin`;
        const description = title;
        const pageUrl = `https://elliotcardin.com/galerie`;

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
                    <div className="galerie">
                        <Row>
                            <Col span={24}>
                                <iframe
                                    id='instaFeed'
                                    title='instaFeed'
                                    src='https://www.juicer.io/api/feeds/elliotcardin/iframe'
                                    frameBorder='0'
                                    scrolling="yes"
                                    allowTransparency="true"
                                    style={{
                                        width: '100%',
                                        minHeight : '100vh',
                                        border: 0
                                    }}
                                ></iframe>
                            </Col>
                        </Row>
                    </div>
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

export default Galerie;
