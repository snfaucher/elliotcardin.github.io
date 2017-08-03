import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import styles from './styles';
import Footer from '../components/footer';
import MediaQuery from 'react-responsive';

class Home extends Component {
    render() {
        return (
            <div className="home" {...styles}>

                <div className="home__caption">
                    <h1>Elliot Cardin</h1>
                    <h3>ultra-trail, course d'endurance, végétalien.</h3>
                    <a href="mailto:info@elliotcardin.com">info@elliotcardin.com</a>
                </div>

                <MediaQuery query='(max-width: 768px)'>
                    <div>You are a tablet or mobile phone</div>
                    <iframe
                        title="small"
                        src="//lightwidget.com/widgets/8b067799c8d157b1a52a151e9c5fea4a.html"
                        scrolling="no"
                        allowTransparency="true"
                        className="lightwidget-widget"
                        style={{
                            width: '100%',
                            border: 0,
                            overflow: 'hidden'
                        }}
                    />
                </MediaQuery>
                <MediaQuery query='(min-width: 769px)'>
                <iframe
                    title="default"
                    src="//lightwidget.com/widgets/1d4121f928eb5b339c917aff86e51a21.html"
                    scrolling="no"
                    allowTransparency="true"
                    className="lightwidget-widget"
                    style={{
                        width: '100%',
                        border: 0,
                        overflow: 'hidden'
                    }}
                />
                </MediaQuery>
                <div className="home__footer">
                    <Footer/>
                </div>
            </div>
        );
    }
}

export default Home;
