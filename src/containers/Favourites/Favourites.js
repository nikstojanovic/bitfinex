import React from 'react';

import useLocalStorage from '../../hooks/useLocalStorage';
import SingleRow from '../../components/SingleRow/SingleRow';

const Favourites = () => {
    const [favourites] = useLocalStorage(`favourites`, []);

    let content = <div>NO FAVOURITES</div>;

    if (favourites.length) {
        content = [...favourites].map(pairId => <SingleRow pairId={pairId} hasDetailLink />)
    }

    return content;
}

export default Favourites;
