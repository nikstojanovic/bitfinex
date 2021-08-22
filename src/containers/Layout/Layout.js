import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as actions from '../../store/actions/index';
import Navbar from '../../components/Navigation/Navbar/Navbar';

import './Layout.scss';

const Layout = ({isAuthenticated, onAuth, children}) => {
    return (
        <>
            <Navbar
                isAuth={isAuthenticated}
                onLoginClick={onAuth}
            />
            <main className="Content">
                {children}
            </main>
        </>
    );
}

Layout.propTypes = {
    isAuthenticated: PropTypes.bool.isRequired,
    onAuth: PropTypes.func.isRequired,
};

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
