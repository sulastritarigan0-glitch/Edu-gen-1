require('dotenv').config();
const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Serve static frontend files
app.use(express.static(path.join(__dirname)));

// Secure API endpoint proxy
app.get('/api/data', (req, res) => {
    const apiKey = process.env.API_KEY;

    if (!apiKey) {
        return res.status(500).json({ error: 'API Key is missing in environment variables.' });
    }

    // In a real production environment, you would use `apiKey` here to fetch external services
    // (e.g. await fetch(`https://api.thirdparty.com/data?key=${apiKey}`))
    // and return the data without passing the API key back to the client.

    res.json({
        message: 'Data successfully retrieved from backend server!',
        status: 'success',
        timestamp: new Date().toISOString()
    });
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
