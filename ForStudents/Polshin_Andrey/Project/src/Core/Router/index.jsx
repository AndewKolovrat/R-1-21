import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from '@pages/Home';
import Profile from '@pages/Profile';

export default class Router extends Component {
    render() {
        return (
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/profile" component={Profile} />
                <Route exact path="/chat/:id" component={Home} />
                <Route exact path="/not-home" render={() => <div>This is not your Home. Get out!</div>} />
            </Switch>
        );
    }
};
