const db = require('../database/db');

// initialize db
const database = new db.Database('users');

async function login(req, res, next) {
  let body = req.body;
  let message = database.authenticate(body);
  console.log(message);
  res.send(message);
};

async function register(req, res, next) {
  let body = req.body;
  let message = database.insert(body);
  console.log(message);
  res.send(message);
};

// exports
exports.login = login;
exports.register = register;
