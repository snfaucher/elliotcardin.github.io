import React, {Component} from 'react';
import styles from './styles';
import MyFooter from '../../../footer';
import MainMenu from  '../../../main-menu';
import Layout  from 'antd/lib/layout';
import Row from 'antd/lib/row';
import Col from 'antd/lib/col';
import Like from '../../../fb/like';
import Share from '../../../fb/share';
import {Helmet} from "react-helmet";


const {Header, Footer, Content} = Layout;

class BromontUltra extends Component {


    render() {
        const title = `Bromont ultra 55k 2017, Malgré quelques difficultés je défends mon titre!`;
        const description = title;
        const pageUrl = `https://elliotcardin.com/blog/bromont-ultra-2017`;

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
                    <meta property="og:image" content="https://elliotcardin.com/media/podium.jpg"/>
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
                        <Col
                            className="jumbotron caption"
                            xs={24}
                            sm={12}
                        >
                            <div className="main">Bromont Ultra 55k 2017: Malgré quelques difficultés, je défends mon
                                titre!
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
                            style={{backgroundImage : `url(/media/BU-2017-Finish.jpg)`}}
                        >
                        </Col>
                        <Col className="story" xs={24} sm={{span : 12, offset : 6}}>
                            <div className="item-wrapper">
                                <div className="item">
                                    <div className="cover">
                                        <iframe
                                            title="bu2017-fb"
                                            src="https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Fbromontultra%2Fvideos%2F1163590847075010%2F&show_text=0&width=540"
                                            style={{border:'none',overflow:'hidden', minHeight:'100%'}}
                                            scrolling="no"
                                            allowTransparency="true"
                                            allowFullScreen="true"
                                            width="100%"
                                            height="130%"
                                            frameBorder="0"
                                        ></iframe>
                                    </div>

                                    <div className="content">
                                        <p>
                                            Je me suis bien préparer pour cet ultra. Pendant deux mois j'ai augmenté mon
                                            volume
                                            de
                                            course de 100 à 140 kilomètres semaine. Je voulais être bien prêt! Après 25
                                            kilomètres à
                                            courir cote à cote avec mon bon "partner" de trail Alexis Lussier, je finis
                                            par
                                            prendre
                                            les devant. Les premiers grosses montées du parcours on été super difficiles
                                            et
                                            j'ai
                                            eu
                                            de la misère à reprendre le "beat".
                                        </p>
                                        <p>
                                            J'avais un gros objectif pour cette course,
                                            je
                                            voulais premièrement battre mon temps de l'année dernière de 5h41 et ce en
                                            passant
                                            sous
                                            la barre des 5h30. Je me suis bien vite rendu compte que cet objectif
                                            n'était
                                            pas
                                            réalisable avec les conditions chaudes, humides, pluvieuses et venteuses.
                                            Mais
                                            j'ai
                                            continué à pousser fort malgré les crampes qui sont apparues sur la section
                                            de
                                            chemin de
                                            campagne au 30 ième kilo et j'ai finalement franchis la ligne d'arriver en
                                            première
                                            place avec un temps de 5h48. Pour être honnête, j'ai beaucoup souffert sur
                                            ces
                                            60
                                            kilomètres et 2200 mètres de dénivelés positifs, mais j'ai heureusement pu
                                            compter
                                            sur
                                            le support incroyable de ma blonde Deborah, qui m'a suivi sur tout les
                                            ravitos
                                            ainsi
                                            que
                                            ma famille. Ça ma aider car j'avais plus le gout de continuer et ça m'a
                                            donner
                                            la
                                            force
                                            d'aller jusqu'au bout. Même si je n'ai pas réussi à battre mon temps de
                                            2016, je
                                            suis
                                            super content de ma performance. Souffrir fait parti aussi de la game, et
                                            durant
                                            cette
                                            course j'ai énormément appris.</p>
                                    </div>
                                    <div className="cover">
                                        <iframe
                                            title="bu2017"
                                            width="100%"
                                            height="100%"
                                            src="https://www.youtube.com/embed/SLcHvoIP1rU"
                                            frameBorder="0"
                                            allowfullscreen>
                                        </iframe>
                                    </div>
                                </div>
                            </div>
                            <div className="item-wrapper">
                                <div className="item">
                                    <div className="cover"
                                         style={{backgroundImage:'url(/media/BU-2017-finish-line1.jpg)'}}>
                                    </div>
                                </div>
                            </div>
                            <div className="item-wrapper">
                                <div className="item">
                                    <div className="cover"
                                         style={{backgroundImage:'url(/media/BU-2017-ali-et-helene.jpg)'}}>
                                        >
                                    </div>
                                    <div className="content">
                                        <p>
                                            Félicitation à mes deux amis qui eu aussi sont aller chercher la première
                                            place. Alister Garner 1er du 160k en 21h43 et Helene Michaud 1ère femme du
                                            80k en 9h10.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Content>
                <Footer>
                    <div
                        className="home__footer">
                        <MyFooter />
                    </div>
                </Footer>
            </Layout>

        );
    }
}

export default BromontUltra;
