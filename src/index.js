const express = require('express');
const router = require('./routes')


const app = express();
const PORT = 5000;

app.use(router)

const server = app.listen(PORT, () => console.log(`Server is running ${PORT} :port`));
// Handling Error
process.on('unhandledRejection', (err) => {
    console.log(`An error occurred: ${err.message}`);
    server.close(() => process.exit(1));
  });
  