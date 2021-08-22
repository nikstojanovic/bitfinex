import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';

import * as actions from '../../store/actions/index';
import withErrorHandler from '../../hoc/withErrorHandler';
import useLocalStorage from '../../hooks/useLocalStorage';
import Button from '../../components/UI/Button/Button';
import Spinner from '../../components/UI/Spinner/Spinner';

const PairDetails = ({match, loading, tradingPairDetails, onInitPairDetails, isAuthenticated}) => {
    const [favorites, setFavorites] = useLocalStorage(`favorites`, []);
    const [buttonType, setButtonType] = useState('Primary');

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

        const row = rowData.map((pairInfo, idx) => <td key={idx}>{pairInfo} </td>);

        content = (
            <>
                <table>
                    <thead>
                        <tr>
                            <th>Symbol</th>
                            <th>Last price</th>
                            <th>High</th>
                            <th>Low</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            {row}
                        </tr>
                    </tbody>
                </table>
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
