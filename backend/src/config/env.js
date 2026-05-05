require("dotenv").config();

const env = {
	port: process.env.PORT || 3000,
	databaseUrl: process.env.DATABASE_URL,
};

module.exports = env;
