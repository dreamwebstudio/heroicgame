const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = 3000;

const server = http.createServer((req, res) => {
    // Serve game.html for the root path
    if (req.url === '/' || req.url === '/index.html') {
        fs.readFile(path.join(__dirname, 'game.html'), (err, content) => {
            if (err) {
                res.writeHead(500);
                res.end(`Error loading game.html: ${err.message}`);
                return;
            }
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.end(content);
        });
    } 
    else {
        // Handle 404 for any other requests
        res.writeHead(404);
        res.end('Not found');
    }
});

server.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}/`);
    console.log(`Open your browser and navigate to http://localhost:${PORT}/ to play the game`);
}); 