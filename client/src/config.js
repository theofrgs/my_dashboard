import dotenv from "dotenv";

dotenv.config();
const env = {
    WEATHER_API_KEY: process.env.REACT_APP_WEATHER_API_KEY,
    CURRENCY_API_KEY: process.env.REACT_APP_CURRENCY_API_KEY,
    STEAM_API_KEY: process.env.REACT_APP_STEAM_API_KEY,
    GOOGLE_CLIENT_ID: process.env.REACT_APP_GOOGLE_CLIENT_ID,
    GOOGLE_CLIENT_KEY: process.env.REACT_APP_GOOGLE_CLIENT_KEY,
}

export { env };