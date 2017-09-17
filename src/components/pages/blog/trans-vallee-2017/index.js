import React, {Component} from 'react';
import styles from './styles';
import MyFooter from '../../../footer';
import MainMenu from  '../../../main-menu';
import Layout  from 'antd/lib/layout';
import Row from 'antd/lib/row';
import Col from 'antd/lib/col';
import Card from 'antd/lib/card';
import data, {results} from './data';
import Like from '../../../fb/like';
import Share from '../../../fb/share';

const {Header, Footer, Content} = Layout;

class TransVallee extends Component {


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
                    <Row className="page-content">
                        <Col
                            className="jumbotron caption"
                            xs={24}
                            sm={12}
                        >
                            <div className="main">Victoire au Trans-Vallée 2017</div>

                            <div className="description">
                                Une course à étape se déroulant sur 3 jours comprenant le 10k de nuit, le 38k et le 21k.
                                Bref, c'est une ambiance 100% trail réunissants les coureurs sur un site de camping en
                                bordure de la rivière du bras du nord et les montagnes.
                            </div>
                            <div className="results">
                                {
                                    results.map(result => {
                                        const {id, caption} = result;
                                        return (
                                            <div key={id}>
                                                {caption}
                                            </div>
                                        );
                                    })
                                }
                            </div>
                            <div className="social">
                                <Like />
                                <Share />
                            </div>

                        </Col>
                        <Col
                            className="jumbotron"
                            xs={24}
                            sm={12}
                            style={{backgroundImage : `url(/media/podium.jpg)`}}
                        ></Col>
                        <Col
                            className="story"
                            xs={24}
                            sm={{span : 12, offset : 6}}
                        >
                            {
                                data.map(datum => {
                                    const {id, image, content}= datum;
                                    return (
                                        <div key={id} className="item-wrapper">
                                            <Card

                                                bodyStyle={{
                                                paddingLeft: 0,
                                                paddingRight: 0,
                                                paddingTop: 0,
                                                paddingBottom: 0
                                            }}
                                            >
                                                <div className="item">
                                                    <div
                                                        className="cover"
                                                        style={{backgroundImage : `url(${image}`}}
                                                    ></div>
                                                    <div className="content">
                                                        {content}
                                                    </div>
                                                </div>
                                            </Card>
                                        </div>
                                    );
                                })
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

export default TransVallee;
