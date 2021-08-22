import React from 'react';

import './DataTable.scss';

const DataTable = ({tableHeader, children}) => {
    return (
        <table className="DataTable">
            <thead>
                <tr>
                    {tableHeader?.map(headerEntry => <th>{headerEntry}</th>)}
                </tr>
            </thead>
            <tbody>
                {children}
            </tbody>
        </table>
    )
}

export default DataTable;