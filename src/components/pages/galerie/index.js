import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import styles from './styles';
import MyFooter from '../../footer';
import MainMenu from  '../../main-menu';
import Layout from 'antd/lib/layout';
import Row from 'antd/lib/row';
import Col from 'antd/lib/col';
import Spin from 'antd/lib/spin';

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
        return (
            <Layout {...styles}>
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