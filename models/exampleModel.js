const prisma = require('../prisma/prisma');

// TODO: Enter your helper functions here

// Mock data to simulate a database (Replace with actual DB operations in a real project)
let exampleData = [
	{ id: 1, name: 'Example 1', description: 'This is the first example' },
	{ id: 2, name: 'Example 2', description: 'This is the second example' },
];

/**
 * @desc    Get an examples
 * @function
 * @returns
 *
 * @description
 * This function retrieves example record from the simulated database.
 */
const getExamples = async (req, res) => {
	try {
		const examples = await prisma.example.findMany();
		res.status(200).json({ examples });
	} catch (error) {
		res.status(500).json({ error });
	}
};

/**
 * @desc    Get all examples
 * @function
 * @returns {Array} An array of example records
 *
 * @description
 * This function retrieves all example records from the simulated database.
 */
const getAllExamples = () => {
	return exampleData;
};

/**
 * @desc    Get an example by ID
 * @function
 * @param   {number} id - The ID of the example to retrieve
 * @returns {Object|undefined} The example record if found, otherwise undefined
 *
 * @description
 * This function retrieves a single example record by its ID from the simulated database.
 */
const getExampleById = (id) => {
	return exampleData.find((item) => item.id === id);
};

/**
 * @desc    Create a new example
 * @function
 * @param   {Object} example - The example data to create
 * @param   {string} example.name - The name of the new example
 * @param   {string} example.description - The description of the new example
 * @returns {Object} The newly created example record
 *
 * @description
 * This function adds a new example record to the simulated database and returns it.
 */
const createExample = (example) => {
	const newExample = {
		id: exampleData.length + 1,
		...example,
	};

	exampleData.push(newExample);

	return newExample;
};

/**
 * @desc    Update an existing example by ID
 * @function
 * @param   {number} id - The ID of the example to update
 * @param   {Object} updatedExample - The updated example data
 * @param   {string} [updatedExample.name] - The new name of the example
 * @param   {string} [updatedExample.description] - The new description of the example
 * @returns {Object|undefined} The updated example record if found and updated, otherwise undefined
 *
 * @description
 * This function updates an existing example record in the simulated database and returns the updated record.
 */
const updateExample = (id, updatedExample) => {
	let example = exampleData.find((item) => item.id === id);

	if (!example) return undefined;

	example = {
		...example,
		...updatedExample,
	};

	exampleData = exampleData.map((item) => (item.id === id ? example : item));

	return example;
};

/**
 * @desc    Delete an example by ID
 * @function
 * @param   {number} id - The ID of the example to delete
 * @returns {boolean} True if the example was deleted, otherwise false
 *
 * @description
 * This function removes an example record by its ID from the simulated database.
 */
const deleteExample = (id) => {
	const initialLength = exampleData.length;
	exampleData = exampleData.filter((item) => item.id !== id);

	return exampleData.length < initialLength;
};

module.exports = {
	getExamples,
	getAllExamples,
	getExampleById,
	createExample,
	updateExample,
	deleteExample,
};
