import React from 'react';

import useLocalStorage from '../../hooks/useLocalStorage';
import DataTableRow from '../../components/DataTableRow/DataTableRow';
import DataTable from '../../components/DataTable/DataTable';

const Favorites = () => {
    const [favorites] = useLocalStorage(`favorites`, []);
    const tableHeader = ['Name', 'Last', 'Change', 'Change Percent', 'High', 'Low'];

    let content = <div>NO FAVORITES</div>;

    if (favorites.length) {
        const rows = [...favorites].map(pairId => <DataTableRow key={pairId} pairId={pairId} hasDetailLink />)

        content = <DataTable tableHeader={tableHeader}>{rows}</DataTable>;
    }

    return <>{content}</>;
}

export default Favorites;
