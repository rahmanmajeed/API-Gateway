const express = require('express');
const router = require('./routes');
const dbconnect = require('./config/db')


const app = express();
const PORT = 5000;
dbconnect()
app.use(router)

const server = app.listen(PORT, () => console.log(`Server is running ${PORT} :port`));
console.log('--- API Gateway Service ---')
console.log('Connecting to API repository...')
// Handling Error
process.on('uncaughtException', (err) => {
  console.error('Unhandled Exception', err)
})

process.on('uncaughtRejection', (err, promise) => {
  console.error('Unhandled Rejection', err)
})