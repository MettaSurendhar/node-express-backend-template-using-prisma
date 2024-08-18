// Importing the Express module
const express = require('express');

// Initializing the main router
const router = express.Router();

/**
 * @desc   Root route of the API
 * @route  GET /
 * @access Public
 * @returns A JSON message confirming that the API route was hit
 */
router.get('/', (req, res) => {
	res.status(200).json({
		message: 'You hit the API route',
	});
});

/**
 * @desc   Version 1 API routes
 * @route  /v1
 * @access Public
 * @remarks Additional versions like /v2 can be added as needed
 */
router.use('/v1', require('./v1'));

module.exports = router;
