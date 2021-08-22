import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';

import * as actions from '../../store/actions/index';
import axios from '../../configuration/axiosOrders.js';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';

import useLocalStorage from '../../hooks/useLocalStorage';
import Button from '../../components/UI/Button/Button';
import Spinner from '../../components/UI/Spinner/Spinner';

const PairDetails = ({match, loading, tradingPairDetails, onInitPairDetails, isAuthenticated}) => {
    const [favourites, setFavourites] = useLocalStorage(`favourites`, []);
    const [buttonType, setButtonType] = useState('Success');

    const pairId = match?.params?.pairId;

    useEffect(() => {
        favourites.includes(pairId)
            ? setButtonType('Danger')
            : setButtonType('Success');
    }, [favourites, pairId])

    useEffect(() => {
        onInitPairDetails(pairId);
    }, [onInitPairDetails, pairId])

    const addToFavourites = () => {
        if (favourites.includes(pairId)) return;

        setFavourites([...favourites, pairId]);
        setButtonType('Danger');
    }

    const removeFromFavourites = () => {
        const itemIndex = favourites.indexOf(pairId);

        if (itemIndex < 0) return;

        const arrayToChange = [...favourites].filter(pair => pair !== pairId);
        setFavourites(arrayToChange);
        setButtonType('Success');
    }

    const isButtonDefault = buttonType !== 'Danger';
    const buttonText = isButtonDefault ? 'Add to favourites' : 'Remove from favourites';

    let content = <Spinner />;

    if (!loading) {
        const rowData = [
            pairId.toUpperCase(),
            tradingPairDetails.last_price,
            tradingPairDetails.high,
            tradingPairDetails.low
        ];

        content = (
            <>
                {rowData.map((pairInfo, idx) => <span key={idx}>{pairInfo} </span>)}
                {isAuthenticated && (
                    <Button
                        clicked={() => isButtonDefault ? addToFavourites() : removeFromFavourites()}
                        btnType={buttonType}
                    >
                        {buttonText}
                    </Button>
                )}
            </>
        )
    }

    return <>{content}</>;
}

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

export default connect(mapStateToProps, mapDispatchToProps)(withErrorHandler(PairDetails, axios));
