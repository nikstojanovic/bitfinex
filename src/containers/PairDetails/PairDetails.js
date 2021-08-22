import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import * as actions from '../../store/actions/index';
import withErrorHandler from '../../hoc/withErrorHandler';
import useLocalStorage from '../../hooks/useLocalStorage';
import Button from '../../components/UI/Button/Button';
import Spinner from '../../components/UI/Spinner/Spinner';
import DataTable from '../../components/DataTable/DataTable';

const PairDetails = ({match, loading, tradingPairDetails, onInitPairDetails, isAuthenticated}) => {
    const [favorites, setFavorites] = useLocalStorage(`favorites`, []);
    const [buttonType, setButtonType] = useState('Primary');
    const tableHeader = ['Symbol', 'Last price', 'High', 'Low'];

    const pairId = match?.params?.pairId;

    useEffect(() => {
        favorites.includes(pairId)
            ? setButtonType('Secondary')
            : setButtonType('Primary');
    }, [favorites, pairId])

    useEffect(() => {
        onInitPairDetails(pairId);
    }, [onInitPairDetails, pairId])

    const addToFavorites = () => {
        if (favorites.includes(pairId)) return;

        setFavorites([...favorites, pairId]);
        setButtonType('Secondary');
    }

    const removeFromFavorites = () => {
        const itemIndex = favorites.indexOf(pairId);

        if (itemIndex < 0) return;

        const arrayToChange = [...favorites].filter(pair => pair !== pairId);
        setFavorites(arrayToChange);
        setButtonType('Primary');
    }

    const isButtonDefault = buttonType !== 'Secondary';
    const buttonText = isButtonDefault ? 'Add to favorites' : 'Remove from favorites';

    let content = <Spinner />;

    if (!loading) {
        const rowData = [
            pairId.toUpperCase(),
            tradingPairDetails.last_price,
            tradingPairDetails.high,
            tradingPairDetails.low
        ];

        const rowCells = rowData.map((pairInfo, idx) => {
            const cellValue = pairInfo && !isNaN(pairInfo) ? Number(pairInfo).toLocaleString('en') : pairInfo || '';

            return <td key={idx}>{cellValue}</td>;
        });

        content = (
            <>
                <DataTable tableHeader={tableHeader}><tr>{rowCells}</tr></DataTable>
                {isAuthenticated && (
                    <div>
                        <Button
                            clicked={() => isButtonDefault ? addToFavorites() : removeFromFavorites()}
                            btnType={buttonType}
                        >
                            {buttonText}
                        </Button>
                    </div>
                )}
            </>
        )
    }

    return <>{content}</>;
}

PairDetails.propTypes = {
    isAuthenticated: PropTypes.bool.isRequired,
    tradingPairDetails: PropTypes.object.isRequired,
    loading: PropTypes.bool.isRequired,
    onInitPairDetails: PropTypes.func.isRequired,
};

const mapStateToProps = state => {
    return {
        isAuthenticated: state.auth.token !== null,
        tradingPairDetails: state.pairDetails.tradingPairDetails,
        loading: state.pairDetails.loading,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onInitPairDetails: (pairId) => dispatch(actions.initPairDetails(pairId)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(withErrorHandler(PairDetails));
