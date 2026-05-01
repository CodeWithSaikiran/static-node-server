const express = require('express');
const path = require('path');
const helmet = require('helmet');
const compression = require('compression');
const app = express();
const PORT = process.env.PORT || 3000;


// Security HTTP headers
app.use(helmet());

// Enable gzip compression
app.use(compression());

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));


// Basic error handler
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something went wrong!');
});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
