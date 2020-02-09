// dependecies
const express = require('express');
const router = express.Router();

// router
router.get('/login', (req, res) => res.send('Logged in'));
router.get('/register', (req, res) => res.send('Registered'));

// exports
module.exports = router

