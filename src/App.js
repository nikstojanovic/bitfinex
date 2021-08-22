import React from 'react';
import { Route, Switch, withRouter, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import routePaths from './configuration/routePaths';
import Layout from './containers/Layout/Layout';
import Dashboard from './containers/Dashboard/Dashboard';
import Favorites from './containers/Favorites/Favorites';
import PairDetails from './containers/PairDetails/PairDetails';

const App = ({isAuthenticated}) => {
    let routes = (
        <Switch>
            <Route path={routePaths.DETAIL} component={PairDetails} />
            <Route path={routePaths.DASHBOARD} exact component={Dashboard} />
            <Redirect to="/"/>
        </Switch>
    );

    if (isAuthenticated) {
        routes = (
            <Switch>
                <Route path={routePaths.DETAIL} component={PairDetails} />
                <Route path={routePaths.FAVORITES} exact component={Favorites} />
                <Route path={routePaths.DASHBOARD} exact component={Dashboard} />
                <Redirect to="/"/>
            </Switch>
        );
    }

    return <Layout>{routes}</Layout>;
}

const mapStateToProps = state => {
    return {
        isAuthenticated: state.auth.token !== null
    };
};

export default withRouter(connect(mapStateToProps, null)(App));
