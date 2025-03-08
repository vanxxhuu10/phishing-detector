const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const axios = require('axios');

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Test Route
app.get('/', (req, res) => {
    res.send('🚀 Phishing Detector Backend is Running on Vercel...');
});

// Email Analysis Route
app.post('/analyze-email', async (req, res) => {
    console.log("📨 Received Request:", req.body);  // Debugging log

    const email = req.body.email || req.body.emailText;
    if (!email) {
        console.log("❌ No email content provided");
        return res.status(400).json({ error: "No email content provided" });
    }

    try {
        console.log(`📤 Sending email text to Python API: ${email}`);

        // ✅ Update this to your deployed Python API URL
        const pythonAPIURL = process.env.PYTHON_API_URL || "const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const axios = require('axios');

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Test Route
app.get('/', (req, res) => {
    res.send('🚀 Phishing Detector Backend is Running on Vercel...');
});

// Email Analysis Route
app.post('/analyze-email', async (req, res) => {
    console.log("📨 Received Request:", req.body);  // Debugging log

    const email = req.body.email || req.body.emailText;
    if (!email) {
        console.log("❌ No email content provided");
        return res.status(400).json({ error: "No email content provided" });
    }

    try {
        console.log(`📤 Sending email text to Python API: ${email}`);

        // ✅ Update this to your deployed Python API URL
        const pythonAPIURL = process.env.PYTHON_API_URL || "https://your-python-api-url.com/predict";

        const response = await axios.post(pythonAPIURL, { emailText: email });

        console.log(`✅ Python API Response: ${JSON.stringify(response.data)}`);
        res.json({ prediction: response.data.prediction });

    } catch (error) {
        console.error("❌ Error communicating with Python API:", error.message);
        res.status(500).json({ error: "Failed to analyze email" });
    }
});

// ✅ Required for Vercel deployment
module.exports = app;/predict";

        const response = await axios.post(pythonAPIURL, { emailText: email });

        console.log(`✅ Python API Response: ${JSON.stringify(response.data)}`);
        res.json({ prediction: response.data.prediction });

    } catch (error) {
        console.error("❌ Error communicating with Python API:", error.message);
        res.status(500).json({ error: "Failed to analyze email" });
    }
});

// ✅ Required for Vercel deployment
module.exports = app;
