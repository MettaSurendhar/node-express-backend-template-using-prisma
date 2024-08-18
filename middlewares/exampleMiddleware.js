// TODO: Enter your middleware function here

/**
 * @desc    Log request details
 * @function
 * @param   {Object} req - The request object
 * @param   {Object} res - The response object
 * @param   {Function} next - The next middleware function
 * @returns {void}
 *
 * @description
 * This middleware logs details of incoming requests, including the HTTP method and URL.
 * It is useful for tracking and debugging requests.
 */
const logRequestDetails = (req, res, next) => {
	console.log(`Request Method: ${req.method}, Request URL: ${req.url}`);
	next();
};

/**
 * @desc    Validate example data
 * @function
 * @param   {Object} req - The request object
 * @param   {Object} res - The response object
 * @param   {Function} next - The next middleware function
 * @returns {void}
 *
 * @description
 * This middleware checks if the necessary fields (name and description) are provided in the
 * request body for POST and PUT requests. If any field is missing, it responds with a 400 error.
 */
const validateExampleData = (req, res, next) => {
	const { name, description } = req.body;

	if (!name || !description) {
		return res.status(400).json({
			success: false,
			message: 'Both name and description are required.',
		});
	}

	next();
};

module.exports = {
	logRequestDetails,
	validateExampleData,
};
