import React from 'react';
import PropTypes from 'prop-types';

import './DataTable.scss';

const DataTable = ({tableHeader, children}) => {
    return (
        <table className="DataTable">
            <thead>
                <tr>
                    {tableHeader?.map(headerEntry => <th key={headerEntry}>{headerEntry}</th>)}
                </tr>
            </thead>
            <tbody>
                {children}
            </tbody>
        </table>
    )
}

DataTable.propTypes = {
    tableHeader: PropTypes.array.isRequired,
    children: PropTypes.node.isRequired,
};

export default DataTable;