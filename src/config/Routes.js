/**
 * Created by gillianyue on 2/15/17.
 */
import React, {Component} from 'react';
import {Router, Route, browserHistory,IndexRoute} from 'react-router';

import App from "../components/App";
import Apparel from "../components/Apparel";

export default class Routes extends Component {
    render() {
        return (
            <Router history={browserHistory}>
                <Route path="/" component={App}>
                    <IndexRoute to="/"/>
                    <Route path="apparel/:id" component={Apparel}>
                    </Route>
             /*       <Route path="snacks/:id" component={Apparel}>
                    </Route>
                    <Route path="stationary/:id" component={Apparel}>
                    </Route>
                    <Route path="textbook/:id" component={Apparel}>
                    </Route>
                    <Route path="others/:id" component={Apparel}>
                    </Route> */
                </Route>
            </Router>
        );
    }
}