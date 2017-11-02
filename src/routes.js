import React from 'react';
import {BrowserRouter as  Router, Route, Switch} from 'react-router-dom';
import Home from './components/pages/home';
import Galerie from './components/pages/galerie';
import About from './components/pages/about';
import Results from './components/pages/results';
import TransVallee2017 from './components/pages/blog/trans-vallee-2017';
import BromontUltra2017 from './components/pages/blog/bromont-ultra-2017';

import Blog from './components/pages/blog';
import InMedia from './components/pages/inMedia';
import NotFound from './NotFound';
import ReactGA from 'react-ga';

ReactGA.initialize('UA-99981643-1');


function logPageView() {
    ReactGA.set({page: window.location.pathname + window.location.search});
    ReactGA.pageview(window.location.pathname + window.location.search);
}
const Routes = props => (
    <Router {...props} onUpdate={logPageView}>
        <div>
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route exact path="/galerie" component={Galerie}/>
                <Route exact path="/a-propos" component={About}/>
                <Route exact path="/resultats" component={Results}/>
                <Route exact path="/in-media/" component={InMedia}/>
                <Route exact path="/blog/" component={Blog}/>
                <Route exact path="/blog/trans-vallee-2017" component={TransVallee2017}/>
                <Route exact path="/blog/bromont-ultra-2017" component={BromontUltra2017}/>
                <Route exact component={NotFound}/>
            </Switch>
        </div>
    </Router>
);

export default Routes;