// dependecies
const express = require('express');
const router = express.Router();

// handlers
const loginPage = require('../handlers/loginPage')

// router GET
router.get('/login', (req, res, next) => res.send('Login Page'));
router.get('/register', (req, res, next) => res.send('Register Page'));

// router POST
router.post('/login', loginPage.login);
router.post('/register', loginPage.register);

// exports
module.exports = router

