import React from 'react';
import {BrowserRouter as  Router, Route, Switch} from 'react-router-dom';
import Home from './components/pages/home';
import Galerie from './components/pages/galerie';
import About from './components/pages/about';
import Results from './components/pages/results';
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
                <Route exact component={NotFound}/>
            </Switch>
        </div>
    </Router>
);

export default Routes;