// dotenv
import dotenv from 'dotenv';
// Path module
import path from 'path';

// constructing .env path
const envPath = path.join(path.dirname(__dirname), '.env');
// config dotenv
dotenv.config({
  path: envPath
});

export default {
  TRACKER_NETWORK_API_URL: process.env.TRACKER_NETWORK_API_URL,
  TRACKER_NETWORK_API_KEY: process.env.TRACKER_NETWORK_API_KEY,
  PORT: process.env.PORT
};
