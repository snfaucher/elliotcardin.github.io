import React, { Component } from 'react';
import styles from './styles';
import MyFooter from '../../footer';
import MainMenu from '../../main-menu';
import Layout from 'antd/lib/layout';

const { Header, Footer, Content } = Layout;

class Home extends Component {
    render() {
        return (
            <Layout {...styles}>
                <Header className="header">
                    <MainMenu />
                </Header>
                <Content>
                    <div className="home"
                        style={{
                            backgroundImage: `url(/media/running-wood.jpg)`,
                            height: '100vh',
                            backgroundSize: 'cover',
                            color: 'whitesmoke'
                        }}
                    >
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
                            }}
                        >
                            <h1>Elliot Cardin</h1>
                            <h3>ultra-trail, course d'endurance, végétalien.</h3>
                            <a href="mailto:info@elliotcardin.com">info@elliotcardin.com</a>
                        </div>
                    </div>

                </Content>
                <Footer>
                    <div className="home__footer">
                        <MyFooter />
                    </div>

                </Footer>
            </Layout>

        );
    }
}

export default Home;
