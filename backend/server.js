const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const axios = require('axios');

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Test Route
app.get('/', (req, res) => {
    res.send('Phishing Detector Backend is Running...');
});

// Email Analysis Route
app.post('/analyze-email', async (req, res) => {
    console.log("📨 Received Request:", req.body);  // Debugging log

    // Ensure request body is correctly parsed
    const email = req.body.email || req.body.emailText;

    if (!email) {
        console.log("❌ No email content provided");
        return res.status(400).json({ error: "No email content provided" });
    }

    try {
        console.log(`📤 Sending email text to Python API: ${email}`);
        
        // Send email text to Python API for analysis
        const response = await axios.post('http://127.0.0.1:5001/predict', { emailText: email });

        console.log(`✅ Python API Response: ${JSON.stringify(response.data)}`);

        res.json({ prediction: response.data.prediction });
    } catch (error) {
        console.error("❌ Error communicating with Python API:", error.message);
        res.status(500).json({ error: "Failed to analyze email" });
    }
});

// Start Server
app.listen(PORT, () => {
    console.log(`🚀 Server is running on http://localhost:${PORT}`);
});
