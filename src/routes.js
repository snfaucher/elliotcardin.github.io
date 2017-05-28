import React from 'react';
import {BrowserRouter as  Router, Route, Switch} from 'react-router-dom';
import Home from './home/Home';
import About from './About';
import NotFound from './NotFound';
import ReactGA from 'react-ga';

ReactGA.initialize('UA-99981643-1');




function logPageView() {
    ReactGA.set({ page: window.location.pathname + window.location.search });
    ReactGA.pageview(window.location.pathname + window.location.search);
}
const Routes = props => (
    <Router {...props} onUpdate={logPageView}>
        <div>
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route exact component={NotFound}/>
            </Switch>
        </div>
    </Router>
);

export default Routes;