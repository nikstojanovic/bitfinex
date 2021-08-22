import React, { Component } from 'react';
import { connect } from 'react-redux';

import Spinner from '../../components/UI/Spinner/Spinner';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';
import SingleRow from '../../components/SingleRow/SingleRow';
import * as actions from '../../store/actions/index';
import axios from '../../configuration/axiosOrders.js';

class Dashboard extends Component {
    componentDidMount() {
        this.props.onInitTradingPairs();
    }

    render() {
        const {error, tradingPairs} = this.props;

        let content = error ? <p>Trading pairs can't be loaded</p> : <Spinner />;

        if (tradingPairs?.length) {
            const rows = tradingPairs.map(tradingPair => (
                <SingleRow
                    key={tradingPair}
                    pairId={tradingPair}
                    hasDetailLink
                />
            ));
            
            content = (
                <table style={{width: '100%'}}>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Last</th>
                        <th>Change</th>
                        <th>Change Percent</th>
                        <th>High</th>
                        <th>Low</th>
                    </tr>
                </thead>
                <tbody>
                    {rows}
                </tbody>
                </table>
            )
        }

        return (
            <>{content}</>
        );
    }
}

const mapStateToProps = state => {
    return {
        tradingPairs: state.dashboard.tradingPairs,
        error: state.dashboard.error,
        isAuthenticated: state.auth.token !== null
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onInitTradingPairs: () => dispatch(actions.initTradingPairs()),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(withErrorHandler(Dashboard, axios));
