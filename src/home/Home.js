import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import styles from './styles';
import Footer from '../components/footer';


class Home extends Component {
    render() {
        return (
            <div className="home" {...styles}>

                <div className="home__caption">
                    <h1>Elliot Cardin</h1>
                    <h3>ultra-trail, course d'endurance, végétalien.</h3>
                </div>
                <div className="home__footer">
                    <Footer/>
                </div>
            </div>
        );
    }
}

export default Home;
