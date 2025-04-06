/**
 * This file creates our server
 */

// import modules
const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const cors = require("cors");

// import routes
// const registerRouter = require("./routes/register.route.js");
const keywordsRouter = require("./routes/keywords.route.js");
const dbConnection = require("./config/db.conn.js");

// setting port number
dotenv.config();
const app = express();
const PORT = process.env.PORT || 60000;

// middleware
app.use(express.json());
app.use(cors());

// set routes
// app.use("/register", registerRouter);
app.use("/summarize", keywordsRouter);

// connet to db
mongoose.set("strictQuery", true);
mongoose.connect(dbConnection.url).then(
	() => {
		console.log("connected to mongodb");
	},
	(err) => {
		console.log("connection failed");
	}
);

// running the server
app.listen(PORT, () => {
	console.log(`Server listening on PORT: ${PORT}`);
});
