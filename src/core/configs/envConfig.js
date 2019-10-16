const ENV = {
    DEV: {
        API_SERVER: 'https://api.giphy.com/v1',
        GIPHY_API_KEY: '7KL4rqyRfDXDpZT0wNj8Bd2DPevRsjHQ',
    },
    STG: {
        API_SERVER: 'https://api.giphy.com/v1',
        GIPHY_API_KEY: '7KL4rqyRfDXDpZT0wNj8Bd2DPevRsjHQ',
    },
    PROD: {
        API_SERVER: 'https://api.giphy.com/v1',
        GIPHY_API_KEY: '7KL4rqyRfDXDpZT0wNj8Bd2DPevRsjHQ',
    }
};

const getEnv = (name, defaultValue) => {
    return process.env[name] || ENV[process.env.REACT_APP_STAGE || "DEV"][name] || defaultValue;
};

export { getEnv };