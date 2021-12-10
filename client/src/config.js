import configJson from "./auth_config.json";

const dotenv = require('dotenv');

dotenv.config();
const env = {
  WEATHER_API_KEY: process.env.REACT_APP_WEATHER_API_KEY,
  CURRENCY_API_KEY: process.env.REACT_APP_CURRENCY_API_KEY,
  STEAM_API_KEY: process.env.REACT_APP_STEAM_API_KEY,
}

export {env};

export function getConfig() {
  const audience =
    configJson.audience && configJson.audience !== "YOUR_API_IDENTIFIER"
      ? configJson.audience
      : null;

  return {
    domain: configJson.domain,
    clientId: configJson.clientId,
    ...(audience ? { audience } : null),
  };
}
