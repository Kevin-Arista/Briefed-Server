const mongoose = require("mongoose");

const keywordsSchema = new mongoose.Schema({
	domain: {
		type: String,
		required: true,
	},
	related_words: [String], // An array of related words
});

const Domain = mongoose.model("related-words", keywordsSchema);

module.exports = Domain;
