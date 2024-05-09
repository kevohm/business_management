const express = require('express');
const { addAnalytic } = require('../controllers/analytics');
const router = express.Router();


router.post('/', addAnalytic);