const express = require('express');
const axios = require('axios');
const path = require('path');

const app = express();
const PORT = 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

// Home route
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/index.html'));
});

// Browse route
app.post('/browse', async (req, res) => {
    let url = req.body.url;

    // Add http if missing
    if (!url.startsWith('http://') && !url.startsWith('https://')) {
        url = 'http://' + url;
    }

    try {
        const response = await axios.get(url);

        res.send(`
            <html>
            <head>
                <title>Simple Browser</title>
                <link rel="stylesheet" href="/style.css">
            </head>
            <body>
                <div class="top-bar">
                    <form method="POST" action="/browse">
                        <input type="text" name="url" placeholder="Enter URL" required />
                        <button type="submit">Go</button>
                    </form>
                </div>

                <div class="content">
                    ${response.data}
                </div>
            </body>
            </html>
        `);

    } catch (error) {
        res.send(`
            <html>
            <head>
                <title>Error</title>
                <link rel="stylesheet" href="/style.css">
            </head>
            <body>
                <div class="top-bar">
                    <form method="POST" action="/browse">
                        <input type="text" name="url" placeholder="Enter URL" required />
                        <button type="submit">Go</button>
                    </form>
                </div>

                <div class="content">
                    <h2 style="color:red;">❌ Invalid URL or Unable to Fetch Content</h2>
                </div>
            </body>
            </html>
        `);
    }
});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});