// dependecies
const express = require('express');
const router = express.Router();

// router
router.get('/', (req, res) => res.send('Welcome'));

// exports
module.exports = router
