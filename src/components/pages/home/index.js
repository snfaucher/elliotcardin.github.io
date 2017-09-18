import React, {Component} from 'react';
import styles from './styles';
import MyFooter from '../../footer';
import MainMenu from '../../main-menu';
import Layout from 'antd/lib/layout';
import {Helmet} from "react-helmet";

const {Header, Footer, Content} = Layout;

class Home extends Component {

    render() {
        const title = `Elliot Cardin - Ultra-trail`;
        const description = `Ultra-trail, course d'endurance, végétalien.`;
        const pageUrl = `http://elliotcardin.com/`;
        return (
            <Layout {...styles}>
                <Helmet>
                    <title>{title}</title>
                    <meta charset="utf-8"/>
                    <meta http-equiv="x-ua-compatible" content="ie=edge"/>
                    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"/>
                    <!-- Control the behavior of search engine crawling and indexing -->
                    <meta name="robots" content="index,follow"/>
                    <!-- All Search Engines -->
                    <meta name="googlebot" content="index,follow"/>
                    <!-- Google Specific -->
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
                    <MainMenu fixSocial={true}/>
                </Header>
                <Content>
                    <div
                        className="home"
                        style={{
                        backgroundImage: `url(/media/running-wood.jpg)`,
                        height: '100vh',
                        backgroundSize: 'cover',
                        color: 'whitesmoke'
                    }}>
                        <div
                            className="caption"
                            style={{
                            position: 'relative',
                            top: '40%',
                            textAlign: 'center',
                            color: 'white !important',
                            '& h1, h3': {
                                color: 'white !important',
                                marginTop: 0
                            }
                        }}>
                            <h1>Elliot Cardin</h1>
                            <h3>ultra-trail, course d'endurance, végétalien.</h3>
                            <a href="mailto:info@elliotcardin.com">info@elliotcardin.com</a>
                        </div>
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

export default Home;
