const express = require('express');
const logger = require('./logger');
const routes = require('./routes');
const app = express();
const port = 3000;

logger.info('[MAIN] Starting');
app.use('/', routes);

app.listen(port, () => {
  logger.info(`[MAIN] Server running at http://localhost:${port}`);
});

process.on('SIGINT', () => {
  logger.info('[MAIN] Stopping');
  process.exit();
});
