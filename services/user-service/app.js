const express = require('express');
const { log } = require('logger-lib');

const app = express();
const PORT = 3001;

app.get('/', (req, res) => {
  log('UserService', 'GET /');
  res.send('User Service is running!');
});

app.listen(PORT, () => log('UserService', `Running on port ${PORT}`));
