import React from 'react';
import {BrowserRouter as  Router, Route, Switch} from 'react-router-dom';

import Home from './home/Home';
import About from './About';
import NotFound from './NotFound';

const Routes = props => (
    <Router {...props}>
        <div>
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route exact component={NotFound}/>
            </Switch>
        </div>
    </Router>
);

export default Routes;