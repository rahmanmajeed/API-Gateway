const express = require('express');


const app = express();
const PORT = 5000;

const server = app.listen(PORT, () => console.log(`Server is running ${PORT} :port`));
// Handling Error
process.on('unhandledRejection', (err) => {
    console.log(`An error occurred: ${err.message}`);
    server.close(() => process.exit(1));
  });
  