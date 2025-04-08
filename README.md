# 🧠 Legal Keyword Summarizer API

This project is an Express.js-based server that connects to a MongoDB database and utilizes OpenAI's GPT model to provide concise definitions for legal terms based on a domain-specific context. The server supports a `/summarize/post` endpoint that queries stored keywords and returns AI-generated descriptions in JSON format.

---

## 🚀 Features

- **Express.js** for routing and server setup
- **Mongoose** to connect and interact with MongoDB
- **CORS** for cross-origin requests
- **Axios** to communicate with the OpenAI API
- **OpenAI's GPT-3.5-Turbo** for generating concise definitions of legal terms

---

## 📦 Tech Stack

- **Backend:** Node.js, Express.js
- **Database:** MongoDB + Mongoose
- **External APIs:** OpenAI ChatGPT (GPT-3.5 Turbo)
- **Others:** dotenv, Axios, CORS

---

## 📁 Main Project Structure

```bash
.
├── config/
│   └── db.conn.js
├── controllers/
│   └── keywords.controller.js
├── model/
│   └── keywords.model.js
├── routes/
│   └── keywords.route.js
├── app.js
└── package.json
```

Developed for Briefed: a Chrome extension that helps translate legalize into plain english.
Backend Developer: Kevin Arista Solis
