const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = 3000;
const ETAG = '"v1.0"'; // A static ETag for the caching demo

const server = http.createServer((req, res) => {
    // --- API Endpoints for Workshop Demos ---

    // 1. DEMO: Successful Request (200 OK)
    // Use this to show a standard, successful API call.
    // Ask the AI: "Summarize this JSON response" or "Explain the 'Content-Type' response header."
    if (req.url === '/api/data' && req.method === 'GET') {
        res.writeHead(200, { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' });
        res.end(JSON.stringify({ message: "Success! Here is your data.", userId: 123, timestamp: new Date() }));
        return;
    }

    // 2. DEMO: Unauthorized Request (401)
    // Use this to demonstrate a common error.
    // Ask the AI: "Explain the 401 status code and common causes for it."
    if (req.url === '/api/secure-data' && req.method === 'GET') {
        res.writeHead(401, { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' });
        res.end(JSON.stringify({ error: "Unauthorized", message: "You need to be logged in to access this resource." }));
        return;
    }

    // 3. DEMO: Caching (304 Not Modified)
    // The client-side JS will send an 'If-None-Match' header.
    // Ask the AI: "Explain how HTTP caching works with ETags and the 304 status code."
    if (req.url === '/api/cached-data' && req.method === 'GET') {
        res.setHeader('Access-Control-Allow-Origin', '*');
        res.setHeader('Cache-Control', 'public, max-age=604800');
        res.setHeader('ETag', ETAG);

        if (req.headers['if-none-match'] === ETAG) {
            res.writeHead(304);
            res.end();
        } else {
            res.writeHead(200, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify({ message: "This is cacheable content.", version: "1.0" }));
        }
        return;
    }

    // 4. DEMO: Slow Response (Performance Panel)
    // This endpoint has an artificial delay to simulate a slow API.
    // Use the Performance panel to record this request.
    // Ask the AI: "WHy this request takes so much time?"
    if (req.url === '/api/slow-data' && req.method === 'GET') {
        setTimeout(() => {
            res.writeHead(200, { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' });
            res.end(JSON.stringify({ message: "This response was intentionally slow.", delay: 2000 }));
        }, 2000); // 2-second delay
        return;
    }

    // --- Static File Serving (for the HTML/CSS/JS frontend) ---
    const filePath = req.url === '/' ? '/index.html' : req.url;
    const extname = String(path.extname(filePath)).toLowerCase();
    const mimeTypes = {
        '.html': 'text/html',
        '.js': 'text/javascript',
        '.css': 'text/css',
    };
    const contentType = mimeTypes[extname] || 'application/octet-stream';

    fs.readFile(path.join(__dirname, filePath), (error, content) => {
        if (error) {
            if (error.code == 'ENOENT') {
                res.writeHead(404, { 'Content-Type': 'text/html' });
                res.end('<h1>404 Not Found</h1>', 'utf-8');
            } else {
                res.writeHead(500);
                res.end('Sorry, check with the site admin for error: ' + error.code + ' ..\n');
            }
        } else {
            res.writeHead(200, { 'Content-Type': contentType });
            res.end(content, 'utf-8');
        }
    });
});

server.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}/`);
    console.log('Open index.html in your browser to start the demo.');
});
