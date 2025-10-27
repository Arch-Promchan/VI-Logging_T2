# Task 2: Tally Counter API

This is a simple REST API built with **Node.js** and **Express**. It keeps track of a number in memory and uses **Winston** to log every action.

---

## Getting Started

**You'll need:**
* Node.js (version 18 or newer)
* npm

**To install and run:**
1.  Open the project folder in your terminal.
2.  Install the packages: `npm install`
3.  Start the server: `node src/main.js`
4.  Run the API tests: `npm test`

---

## API Endpoints

The server runs on `http://localhost:3000`.

* `GET /counter-read`
    * Checks the current count.
* `GET /counter-increase`
    * Adds 1 to the count.
* `GET /counter-reset`
    * Resets the count to 0.

---

## Logging

Every time you use the API, a log is created. The logs have labels like `[MAIN]`, `[ENDPOINT]`, and `[COUNTER]` so you can see what's happening.

The project is also set up to ignore the `node_modules` and `logs` folders in Git.