import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

import useWebSocket from '../../hooks/useWebSocket';

const DataTableRow = ({pairId, hasDetailLink}) => {
    const [rowData] = useWebSocket(pairId);
    
    const rowValues = Object.values(rowData);
    const rowKeys = Object.keys(rowData);

    return (
        <tr>
            {rowValues.map((cellData, idx) => {
                const cellValue = cellData.toLocaleString('en');

                return (
                    <td key={rowKeys[idx]}>
                        {hasDetailLink && idx === 0
                            ? <NavLink to={`/detail/${pairId}`}>{cellValue}</NavLink>
                            : cellValue
                        }
                    </td>
                )
            })}
        </tr>
    )
}

DataTableRow.propTypes = {
    pairId: PropTypes.string.isRequired,
    hasDetailLink: PropTypes.bool.isRequired,
};

export default DataTableRow;