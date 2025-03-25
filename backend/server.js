const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors()); // Allow requests from frontend
app.use(bodyParser.json()); // Parse JSON data

// Sample API Route
app.get("/", (req, res) => {
    res.send("Welcome to the API!");
});

// API for Processing Data
app.post("/process", (req, res) => {
    const { data } = req.body;

    // Process Data (Example: Reverse String)
    const processedData = data.split("").reverse().join("");

    res.json({ success: true, result: processedData });
});

// Start Server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
