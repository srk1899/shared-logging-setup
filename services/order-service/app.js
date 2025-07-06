const express = require('express');
const { log } = require('logger-lib');

const app = express();
const PORT = 3002;

app.get('/', (req, res) => {
  log('OrderService', 'GET /');
  res.send('Order Service is running!');
});

app.listen(PORT, () => log('OrderService', `Running on port ${PORT}`));
