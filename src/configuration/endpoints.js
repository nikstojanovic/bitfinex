const endpoints = {
    PUBLIC_URL: process.env.PUBLIC_URL || '/',
    BITFINEX_WS: 'wss://api-pub.bitfinex.com/ws/2',
    GET_TRADING_PAIRS: '/v1/symbols',
    GET_TRADING_PAIR_DETAILS: '/v1/pubticker/:symbol',
};

export default endpoints;