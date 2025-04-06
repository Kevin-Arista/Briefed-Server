const axios = require("axios");
const Domain = require("../model/keywords.model.js");

exports.summarize = async (req, res) => {
	try {
		const { domain } = req.body;
		console.log(domain);

		// Step 1: Fetch the document from MongoDB that matches the domain
		const domainDoc = await Domain.findOne({ domain });
		console.log(domainDoc);

		if (!domainDoc) {
			return res.status(404).json({ error: "Domain not found" });
		}

		// Step 2: Get the list of related words
		const relatedWords = domainDoc.related_words;

		// Step 3: Create the prompt to send to ChatGPT
		const prompt = `
      You are a helpful assistant providing definitions of legal terms in the context of ${domain}. 
      Please define the following words and return a JSON object where the keys are the words and the values are the definitions. The descriptions word should be less than 40 words:

      ${relatedWords.join(", ")}
    `;

		// Step 4: Send request to ChatGPT for definitions
		const response = await axios.post(
			"https://api.openai.com/v1/chat/completions",
			{
				model: "gpt-3.5-turbo",
				messages: [
					{ role: "system", content: "You are a legal assistant." },
					{ role: "user", content: prompt },
				],
			},
			{
				headers: {
					Authorization: `Bearer ${process.env.OPENAI_KEY}`,
					"Content-Type": "application/json",
				},
			}
		);

		// Step 5: Parse and return the JSON formatted response
		const definitions = response.data.choices[0].message.content;

		// Step 6: Send the response back to the client
		res.json(JSON.parse(definitions));
	} catch (error) {
		console.error("Error fetching definitions:", error.message);
		console.error(req.body);
		res.status(500).json({ error: "Server error" });
	}
};
