const dotenv = require("dotenv");

dotenv.config();

const dbConnection = {
	url: process.env.MONGODB_URI,
};

module.exports = dbConnection;
