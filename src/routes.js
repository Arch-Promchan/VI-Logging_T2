const express = require('express');
const router = express.Router();
const counter = require('./counter');
const logger = require('./logger');

router.get('/counter-read', (req, res) => {
  const value = counter.read();
  logger.info(`[COUNTER] read ${value}`);
  res.json({ count: value });
});

router.get('/counter-increase', (req, res) => {
  const value = counter.increase();
  logger.info(`[COUNTER] increase ${value}`);
  res.json({ count: value });
});

router.get('/counter-reset', (req, res) => {
  const value = counter.reset();
  logger.info(`[COUNTER] zeroed ${value}`);
  res.json({ count: value });
});

module.exports = router;
