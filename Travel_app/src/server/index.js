const express = require('express');
const path = require('path');
const app = express();
const dotenv = require('dotenv');
dotenv.config();
const PORT = 8080;

app.use(express.static('dist'))

const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const cors = require('cors');
app.use(cors());

app.use(express.static(path.join(__dirname, "../client"))); // Adjust path to point to the 'client' folder
console.log(__dirname);

app.get('/', function (req, res) {
  res.sendFile('dist/index.html')
});

app.get("/", function (req, res) {
    // Use path.resolve to create an absolute path to index.html
    res.sendFile(path.resolve(__dirname, "../client/views", "index.html"));
  });
  
  // Setup Server
  const server = app.listen(PORT, () => {
    console.log(`Server started on port: ${PORT}`);
  });

app.get('/test', (req, res) => {
    res.status(200).json({ message: 'Server is running!' });
});
module.exports = app;