import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import styles from './styles';
import MyFooter from '../../footer';
import MediaQuery from 'react-responsive';
import MainMenu from  '../../main-menu';
import {Layout, Row, Col} from 'antd';

const {Header, Footer, Content} = Layout;

class Results extends Component {
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
                    <div className="Results">
                        <Row>
                            <Col span={24}>
                                <h1>Résultats</h1>
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

export default Results;
