import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import styles from './styles';
import MyFooter from '../../footer';
import MediaQuery from 'react-responsive';
import MainMenu from  '../../main-menu';
import {Layout, Row, Col, Card} from 'antd';

const {Header, Footer, Content} = Layout;

class About extends Component {
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
                    <div className="About">
                        <Row>
                            <Col span={24} className="content">
                                <Card
                                    bodyStyle={{
                                        paddingLeft: 0,
                                        paddingRight: 0,
                                        paddingTop: 0,
                                        paddingBottom: 0
                                    }}>
                                    <Row >
                                        <Col span={24}
                                             className="cover"
                                        >
                                        </Col>
                                        <Col
                                            span={24}
                                            className="description"
                                        >
                                            <p>
                                                Je ne suis pas le genre de personne à faire les choses à moitié et ce
                                                côté
                                                excessif et
                                                ultra motivé que j’ai en moi s’est vite fait remarquer dans mes tout
                                                début
                                                en course à
                                                pied. Débutant par un demi-marathon, la passion est née et depuis, je
                                                cours
                                                sans cesse.
                                                J’aime la course sur route, mais je préfère de loin la course en
                                                montagne.
                                            </p>
                                            <p>​
                                                Pourquoi la course en sentier? Car la seule chose dont j’ai besoin c’est
                                                d’enfiler mes
                                                souliers et d’aligner chacun de mes pas tout en appréciant ces beaux
                                                paysages qui
                                                défilent. Dans cette simplicité, j’éprouve un sentiment de liberté, le
                                                sentiment de
                                                pouvoir tout découvrir. Être seul dans la nature me permet de me
                                                ressourcer
                                                et
                                                d’apprécier le moment présent.
                                            </p>
                                        </Col>


                                    </Row>
                                </Card>
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

export default About;
