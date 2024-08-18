// Importing the Express module
const express = require('express');

// Initializing the router for API version 1
const router = express.Router();

/**
 * @desc   Root route for API version 1
 * @route  GET /v1
 * @access Public
 * @returns A JSON message confirming that the API v1 route was hit
 */
router.get('/', (req, res) => {
	res.status(200).json({ message: 'You hit the API v1 route' });
});

/**
 * @desc   Example resource routes
 * @route  /v1/example
 * @access Public
 * @remarks Handles all operations related to the 'example' resource
 */
router.use('/example', require('./exampleRouter'));

module.exports = router;
