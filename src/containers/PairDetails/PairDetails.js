import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';

import useLocalStorage from '../../hooks/useLocalStorage';
import SingleRow from '../../components/SingleRow/SingleRow';
import Button from '../../components/UI/Button/Button';
import Spinner from '../../components/UI/Spinner/Spinner';

const PairDetails = ({match, loading, isAuthenticated}) => {
    const [favourites, setFavourites] = useLocalStorage(`favourites`, []);
    const [buttonType, setButtonType] = useState('Success');

    const pairId = match?.params?.pairId;

    useEffect(() => {
        favourites.includes(pairId)
            ? setButtonType('Danger')
            : setButtonType('Success');
    }, [favourites, pairId])

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

    let content = <Spinner />;
    
    if (!loading) {
        content = <SingleRow pairId={pairId} />
    }

    const isButtonDefault = buttonType !== 'Danger';
    const buttonText = isButtonDefault ? 'Add to favourites' : 'Remove from favourites';

    return (
        <>
            {content}
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

const mapStateToProps = state => {
    return {
        isAuthenticated: state.auth.token !== null
    };
};

export default connect(mapStateToProps, null)(PairDetails);
