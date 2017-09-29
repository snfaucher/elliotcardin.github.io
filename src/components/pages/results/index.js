import React, {Component} from 'react';
import styles from './styles';
import MyFooter from '../../footer';
import MainMenu from  '../../main-menu';
import Layout  from 'antd/lib/layout';

import rawData from './data';
import _ from 'lodash';
import {Helmet} from "react-helmet";

let data = _.reverse(_.sortBy(rawData, d => new Date(d.date)));
data = data.map((d, i) => {
    return Object.assign(d, {
        id: i,
        year: new Date(d.date).getFullYear()
    });
});
const years = _.uniq(_.map(data, d => d.year));

const {Header, Footer, Content} = Layout;

class Results extends Component {

    renderList(list) {
        return list.map(d => {
            const {eventName, position, id, time, city, distance, date} = d;
            const actualDistance = _.isFunction(distance) ? distance() : `${distance}km`;
            return (
                <div
                    key={id}
                    className="result-item"
                >
                    <div className="primary-content">

                        <h2>{eventName}</h2>
                        {
                            !!position &&
                            <div>{position} - {actualDistance} - {time}</div>
                        }
                        {
                            !position &&
                            <span>À venir !</span>
                        }
                    </div>
                    <div className="secondary-content">
                        <div>{date}</div>
                        <div>{city}</div>
                    </div>
                </div>
            );
        })
    }

    renderYearlyResults() {
        return years.map(year => {
            const list = _.filter(data, d => d.year === year);

            return (
                <div key={year} className="year-result">
                    <h1> {year}</h1>
                    {this.renderList(list)}
                </div>
            );
        });
    }

    render() {
        const title = `Résultats - Elliot Cardin`;
        const description = `Résultats de courses de la saison actuelle et passées.`;
        const pageUrl = `http://elliotcardin.com/resultats`;

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
                    <meta property="og:image" content="http://elliotcardin.com/media/podium.jpg"/>
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
                    <div className="results">
                        <div className="results-list-wrapper">
                            <div className="results-list">
                                {this.renderYearlyResults()}
                            </div>
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

export default Results;
