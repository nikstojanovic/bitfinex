const config = {
    PUBLIC_URL: process.env.PUBLIC_URL || '/',
    ENDPOINTS: {
        GET_TRAING_PAIRS: '/v1/symbols',
        GET_TRADING_PAIR_DETAILS: '/v1/pubticker/:symbol',
    },
};

export default config;