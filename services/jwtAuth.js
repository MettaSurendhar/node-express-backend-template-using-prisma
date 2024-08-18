// Importing the jsonwebtoken module for creating and verifying JWTs
const jwt = require('jsonwebtoken');

// TODO: Enter your service functions here

/**
 * @desc    Creates a JSON Web Token (JWT) for a given email
 * @param   {string} email - The email to be encoded in the JWT
 * @returns {string} A signed JWT with the email encoded
 * @remarks The token is signed using the secret key and algorithm specified in environment variables. The token expires in 5 days (86400 seconds/day).
 */
const createJWT = (email) => {
	const token = jwt.sign({ email }, process.env.JWT_SECRET, {
		expiresIn: 5 * 86400, // Token expiration time set to 5 days
		algorithm: process.env.SIGNING_ALGO, // Signing algorithm from environment variables
	});

	return token;
};

/**
 * @desc    Verifies a given JSON Web Token (JWT)
 * @param   {string} token - The JWT to be verified
 * @returns {object|null} Decoded JWT payload if the token is valid, or null if invalid
 * @remarks The token is verified using the secret key specified in environment variables. If verification fails, null is returned.
 */
const verifyJWT = (token) => {
	try {
		const decoded = jwt.verify(token, process.env.JWT_SECRET);
		return decoded;
	} catch (err) {
		return null;
	}
};

module.exports = {
	createJWT,
	verifyJWT,
};
