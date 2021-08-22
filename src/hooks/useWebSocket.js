import { useState, useRef, useEffect } from 'react';

import endpoints from '../configuration/endpoints'

export default function useWebSocket(pairId) {
    const [rowData, setRowData] = useState({});
    const pairSymbol = pairId.toUpperCase();
    const webSocket = useRef(null);

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
                    dailyChangePercent: pairDetails[5] * 100,
                    dailyHigh: pairDetails[8],
                    dailyLow: pairDetails[9],
                });
            }
        };
    }, [pairSymbol]);

    return [rowData, setRowData];
}