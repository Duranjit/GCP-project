
const express = require('express');


const app = express();

app.get('/', (req, res) => {
  res.send('Hello, World from GCP!'); // Send a response message
});

// Define the port for the app to listen on
const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
