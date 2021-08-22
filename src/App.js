import React, { Component } from 'react';
import { Route, Switch, withRouter, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import asyncComponent from './hoc/asyncComponent/asyncComponent';
import routePaths from './configuration/routePaths';
import Layout from './containers/Layout/Layout';
import Dashboard from './containers/Dashboard/Dashboard';

const asyncFavourites = asyncComponent(() => {
    return import('./containers/Favourites/Favourites');
});

const asyncPairDetails = asyncComponent(() => {
    return import('./containers/PairDetails/PairDetails');
});

class App extends Component {
    render() {
        let routes = (
            <Switch>
                <Route path={routePaths.DETAIL} component={asyncPairDetails} />
                <Route path={routePaths.DASHBOARD} exact component={Dashboard} />
                <Redirect to="/"/>
            </Switch>
        );

        if (this.props.isAuthenticated) {
            routes = (
                <Switch>
                    <Route path={routePaths.DETAIL} component={asyncPairDetails} />
                    <Route path={routePaths.DASHBOARD} exact component={Dashboard} />
                    <Route path={routePaths.FAVOURITES} exact component={asyncFavourites} />
                    <Redirect to="/"/>
                </Switch>
            );
        }

        return <Layout>{routes}</Layout>;
    }
}

const mapStateToProps = state => {
    return {
        isAuthenticated: state.auth.token !== null
    };
};

export default withRouter(connect(mapStateToProps, null)(App));
