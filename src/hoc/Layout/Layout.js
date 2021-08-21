import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../../store/actions/index';
import Aux from '../Wrapper/Wrapper';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';

import './Layout.css';

const Layout = ({isAuthenticated, onAuth, children}) => {
    return (
        <Aux>
            <Toolbar
                isAuth={isAuthenticated}
                onLoginClick={onAuth}
            />
            <main className="Content">
                {children}
            </main>
        </Aux>
    );
}

const mapStateToProps = state => {
    return {
        isAuthenticated: state.auth.token !== null
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onAuth: () => dispatch(actions.auth()),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Layout);
