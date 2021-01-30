const path = require("path");
const axios = require("axios");
const dotenv = require("dotenv");

dotenv.config({ path: path.join(__dirname, ".env") });
axios.defaults.baseURL = process.env.API_URL;
