import React from 'react';
import {BrowserRouter as  Router, Route, Switch} from 'react-router-dom';

import App from './App';
import About from './About';
import NotFound from './NotFound';

const Routes = props => (
    <Router {...props}>
        <div>
            <Switch>
                <Route exact path="/" component={App}/>
                <Route exact path="/about" component={About}/>
                <Route exact component={NotFound}/>
            </Switch>
        </div>
    </Router>
);

export default Routes;