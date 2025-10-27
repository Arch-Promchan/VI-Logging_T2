let count = 0;

function read() {
  return count;
}

function increase() {
  count++;
  return count;
}

function reset() {
  count = 0;
  return count;
}

module.exports = { read, increase, reset };
