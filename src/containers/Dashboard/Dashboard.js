import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import Spinner from '../../components/UI/Spinner/Spinner';
import withErrorHandler from '../../hoc/withErrorHandler';
import TableRow from '../../components/TableRow/TableRow';
import * as actions from '../../store/actions/index';

const Dashboard = ({tradingPairs, onInitTradingPairs}) => {
    const isDataInitialized = !!tradingPairs?.length;

    useEffect(() => {
        if (isDataInitialized) return;

        onInitTradingPairs();
    }, [onInitTradingPairs, isDataInitialized])

    let content = <Spinner />;

    if (isDataInitialized) {
        const rows = tradingPairs.map(tradingPair => (
            <TableRow
                key={tradingPair}
                pairId={tradingPair}
                hasDetailLink
            />
        ));
        
        content = (
            <table>
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

    return <>{content}</>;
}

const mapStateToProps = state => {
    return {
        tradingPairs: state.dashboard.tradingPairs,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onInitTradingPairs: () => dispatch(actions.initTradingPairs()),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(withErrorHandler(Dashboard));
