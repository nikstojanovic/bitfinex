import React, { Component } from 'react';
import { connect } from 'react-redux';

// import Aux from '../../hoc/Wrapper/Wrapper';
// import Burger from '../../components/Burger/Burger';
// import BuildControls from '../../components/Burger/BuildControls/BuildControls';
// import Modal from '../../components/UI/Modal/Modal';
// import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';
import Spinner from '../../components/UI/Spinner/Spinner';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';
import SingleRow from './SingleRow';
import * as actions from '../../store/actions/index';
import axios from '../../axios-orders.js';

class Dashboard extends Component {
    componentDidMount() {
        this.props.onInitTradingPairs();
    }

    render() {
        const {error, tradingPairs} = this.props;

        let content = error ? <p>Trading pairs can't be loaded</p> : <Spinner />;

        if (tradingPairs?.length) {
            const rows = tradingPairs.map(tradingPair => <SingleRow key={tradingPair} pairId={tradingPair} />)
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
        onIngredientAdded: (ingName) => dispatch(actions.addIngredient(ingName)),
        onIngredientRemoved: (ingName) => dispatch(actions.removeIngredient(ingName)),
        onInitTradingPairs: () => dispatch(actions.initTradingPairs()),
        onInitPurchase: () => dispatch(actions.purchaseInit()),
        onSetAuthRedirectPath: (path) => dispatch(actions.setAuthRedirectPath(path))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(withErrorHandler(Dashboard, axios));
