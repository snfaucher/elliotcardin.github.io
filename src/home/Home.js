import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import styles from './styles';
import MyFooter from '../components/footer';
import MediaQuery from 'react-responsive';
import MainMenu from  '../components/main-menu';
import {Layout} from 'antd';

const {Header, Footer, Content} = Layout;

class Home extends Component {
    render() {
        return (
            <Layout {...styles}>
                <Header className="header">
                    <MainMenu />
                </Header>
                <Content>
                    <div className="home">
                        <div className="caption">
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
