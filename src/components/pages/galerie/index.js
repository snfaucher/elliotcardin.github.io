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

    componentWillMount() {
        this.setState({
            iframeLoaded: false
        });
    }

    onIframeLoaded() {
        this.setState({
            iframeLoaded: true
        });
    }

    render() {
        const title = `Galerie photos - Elliot Cardin`;
        const description = title;
        const pageUrl = `http://elliotcardin.com/galerie`;

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
                    <div className="galerie">
                        <Row>
                            <Col span={24}>
                                {
                                    !this.state.iframeLoaded &&
                                    <div className="spinner-wrapper">
                                        <Spin />
                                    </div>
                                }

                                <iframe
                                    title="default"
                                    src="//lightwidget.com/widgets/dbe3809fc675576089ae5b45bf45bfe6.html"
                                    scrolling="no"
                                    allowTransparency="true"
                                    className="lightwidget-widget"
                                    style={{
                                        width: '100%',
                                        border: 0,
                                        overflow: 'hidden',
                                        height: this.state.iframeLoaded ? 'inherit' : 0,
                                        minHeight: this.state.iframeLoaded ? 'inherit' : 0,
                                    }}
                                    onLoad={()=> this.onIframeLoaded()}
                                    onLoadStart={()=> this.setState({iframeLoaded: false})}
                                />
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
