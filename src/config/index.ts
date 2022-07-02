const urlApi = process.env.REACT_APP_URL_API;
const apiKey = process.env.REACT_APP_API_KEY;
const googleMapApiKey = process.env.REACT_APP_GOOGLE_MAP_API_KEY;

const config = {
    urlApi,
    apiKey,
    googleMapApiKey,
    routes: {
        current: '/weather',
        forecast: '/forecast'
    }
};

export default config;
