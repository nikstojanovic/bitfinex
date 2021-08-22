import React from 'react';

import useLocalStorage from '../../hooks/useLocalStorage';
import SingleRow from '../../components/SingleRow/SingleRow';

const Favorites = () => {
    const [favorites] = useLocalStorage(`favorites`, []);

    let content = <div>NO FAVORITES</div>;

    if (favorites.length) {
        const rows = [...favorites].map(pairId => <SingleRow key={pairId} pairId={pairId} hasDetailLink />)

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

export default Favorites;
