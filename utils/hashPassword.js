const bcrypt = require('bcryptjs');

// Utility functions for password hashing and verification

/**
 * @desc    Hashes a plain-text password
 * @param   {string} password - The password to be hashed
 * @returns {string} The hashed password
 */
const hashPassword = (password) => {
	// Generate a salt with 10 rounds
	const salt = bcrypt.genSaltSync(10);

	// Hash the password with the generated salt
	const hash = bcrypt.hashSync(password, salt);

	return hash;
};

/**
 * @desc    Verifies if the provided password matches the hashed password in the database
 * @param   {string} password - The plain-text password to verify
 * @param   {string} dbpass - The hashed password from the database
 * @returns {boolean} True if the password matches, false otherwise
 */
const verifyPassword = (password, dbpass) => {
	// Compare the provided password with the hashed password
	return bcrypt.compareSync(password, dbpass);
};

module.exports = {
	hashPassword,
	verifyPassword,
};
