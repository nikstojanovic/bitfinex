import React, {useState, useEffect, useRef} from 'react';
import { NavLink } from 'react-router-dom';

import endpoints from '../../configuration/endpoints'

const SingleRow = ({pairId, hasDetailLink}) => {
    const [rowData, setRowData] = useState({});
    const webSocket = useRef(null);
    const pairSymbol = pairId.toUpperCase();

    useEffect(() => {
        webSocket.current = new WebSocket(endpoints.BITFINEX_WS);

        let msg = JSON.stringify({ 
            event: 'subscribe', 
            channel: 'ticker', 
            symbol: `t${pairSymbol}`
        })

        webSocket.current.onopen = () => webSocket.current.send(msg);

        return () => webSocket.current.close();
    }, [pairSymbol])

    useEffect(() => {
        if (!webSocket.current) return;

        webSocket.current.onmessage = event => {
            const data = JSON.parse(event.data);

            if (Array.isArray(data) && Array.isArray(data[1]) && data[1].length) {
                const pairDetails = data[1];

                setRowData({
                    pairSymbol,
                    lastPrice: pairDetails[6],
                    dailyChange: pairDetails[4],
                    dailyChangePercent: pairDetails[5],
                    dailyHigh: pairDetails[8],
                    dailyLow: pairDetails[9],
                });
            }
        };
    }, [pairSymbol]);

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

export default SingleRow;