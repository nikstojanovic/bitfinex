import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Spinner from '../../components/UI/Spinner/Spinner';
import DataTableRow from '../../components/DataTableRow/DataTableRow';
import DataTable from '../../components/DataTable/DataTable';
import * as actions from '../../store/actions/index';
import withErrorHandler from '../../hoc/withErrorHandler';

const Dashboard = ({tradingPairs, onInitTradingPairs}) => {
    const isDataInitialized = !!tradingPairs?.length;
    const tableHeader = ['Name', 'Last', 'Change', 'Change Percent', 'High', 'Low'];

    useEffect(() => {
        if (isDataInitialized) return;

        onInitTradingPairs();
    }, [onInitTradingPairs, isDataInitialized])

    let content = <Spinner />;

    if (isDataInitialized) {
        const rows = tradingPairs.map(tradingPair => (
            <DataTableRow
                key={tradingPair}
                pairId={tradingPair}
                hasDetailLink
            />
        ));
        
        content = <DataTable tableHeader={tableHeader}>{rows}</DataTable>;
    }

    return <>{content}</>;
}

Dashboard.propTypes = {
    tradingPairs: PropTypes.array.isRequired,
    onInitTradingPairs: PropTypes.func.isRequired,
};

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
