# Simple_browser
Mini Browser Application
A simple Node.js and Express-based web browser that fetches and displays external webpage content through a proxy server.

Features
Express Server: Handles backend routing and fetches external HTML content.

Proxy Fetching: Uses Axios to bypass CORS restrictions for viewing external sites.

Simple UI: Clean HTML/CSS interface with a URL input and a content viewport.

Error Handling: Gracefully displays messages for invalid URLs or failed requests.

Tech Stack
Backend: Node.js, Express.js, Axios

Frontend: HTML5, CSS3, JavaScript (Fetch API)

Installation
Clone the repository or create a new directory: mkdir mini-browser && cd mini-browser

Initialize the project: npm init -y

Install dependencies: npm install express axios

Usage
Create server.js and a public/index.html file using the provided source code.

Start the server: node server.js

Open your browser and navigate to: http://localhost:3000

Enter a full URL (including https://) into the input field and click "Go"
