// Import the express library
const express = require('express');
// Import the path module to work with file paths
const path = require('path');

// Create a new express application
const app = express();

// Set the port number for our server
const port = process.env.PORT || 8080;

// Define a route for the home page ("/Home")
app.get('/Home', function(req, res) {
  // Send the index.html file as the response
  res.sendFile(path.join(__dirname, '/index.html'));
});

// Start the server and listen on the specified port
app.listen(port);
console.log('Server started at http://localhost:' + port);