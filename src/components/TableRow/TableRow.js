import React from 'react';
import { NavLink } from 'react-router-dom';

import useWebSocket from '../../hooks/useWebSocket';

const TableRow = ({pairId, hasDetailLink}) => {
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

export default TableRow;