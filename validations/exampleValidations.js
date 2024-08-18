const joi = require('joi');

/**
 * Middleware to validate the 'example' field in the request body.
 *
 * @param {object} req - The request object containing the data sent by the client.
 * @param {object} res - The response object used to send responses to the client.
 * @param {function} next - The next middleware function in the stack.
 * @returns {object} - Returns a 400 status code with an error message if validation fails.
 *
 * @example
 * // Expected request body:
 * // { "example": "This is an example" }
 *
 * router.post('/example', validateExample, (req, res) => {
 *    // Controller logic here
 * });
 */
const validateExample = (req, res, next) => {
	const schema = joi.object({
		example: joi.string().required(),
	});

	const { error } = schema.validate(req.body);

	if (error) {
		return res.status(400).json({ message: error.details[0].message });
	}

	next();
};

module.exports = {
	validateExample,
};
