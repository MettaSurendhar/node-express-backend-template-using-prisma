// TODO: Declare your controllers here

// Importing necessary modules from Express
const express = require('express');

// Mock data to simulate a database (Replace with actual DB calls in a real project)
let exampleData = [
	{ id: 1, name: 'Example 1', description: 'This is the first example' },
	{ id: 2, name: 'Example 2', description: 'This is the second example' },
];

/**
 * @desc    Get all examples
 * @route   GET /api/examples
 * @access  Public
 * @returns JSON object containing all example records
 */
exports.getAllExamples = (req, res) => {
	res.status(200).json({
		success: true,
		data: exampleData,
	});
};

/**
 * @desc    Get a single example by ID
 * @route   GET /api/examples/:id
 * @access  Public
 * @param   {number} req.params.id - The ID of the example to retrieve
 * @returns JSON object containing the requested example record or an error message
 */
exports.getExampleById = (req, res) => {
	const exampleId = parseInt(req.params.id);
	const example = exampleData.find((item) => item.id === exampleId);

	if (!example) {
		return res.status(404).json({
			success: false,
			message: `No example found with ID: ${exampleId}`,
		});
	}

	res.status(200).json({
		success: true,
		data: example,
	});
};

/**
 * @desc    Create a new example
 * @route   POST /api/examples
 * @access  Public
 * @param   {string} req.body.name - The name of the new example
 * @param   {string} req.body.description - The description of the new example
 * @returns JSON object containing the newly created example record
 */
exports.createExample = (req, res) => {
	const newExample = {
		id: exampleData.length + 1,
		name: req.body.name,
		description: req.body.description,
	};

	exampleData.push(newExample);

	res.status(201).json({
		success: true,
		data: newExample,
	});
};

/**
 * @desc    Update an existing example by ID
 * @route   PUT /api/examples/:id
 * @access  Public
 * @param   {number} req.params.id - The ID of the example to update
 * @param   {string} [req.body.name] - The new name of the example
 * @param   {string} [req.body.description] - The new description of the example
 * @returns JSON object containing the updated example record or an error message
 */
exports.updateExample = (req, res) => {
	const exampleId = parseInt(req.params.id);
	let example = exampleData.find((item) => item.id === exampleId);

	if (!example) {
		return res.status(404).json({
			success: false,
			message: `No example found with ID: ${exampleId}`,
		});
	}

	// Update the example with new data if provided
	example = {
		...example,
		name: req.body.name || example.name,
		description: req.body.description || example.description,
	};

	exampleData = exampleData.map((item) =>
		item.id === exampleId ? example : item
	);

	res.status(200).json({
		success: true,
		data: example,
	});
};

/**
 * @desc    Delete an example by ID
 * @route   DELETE /api/examples/:id
 * @access  Public
 * @param   {number} req.params.id - The ID of the example to delete
 * @returns JSON object confirming the deletion or an error message
 */
exports.deleteExample = (req, res) => {
	const exampleId = parseInt(req.params.id);
	const exampleIndex = exampleData.findIndex((item) => item.id === exampleId);

	if (exampleIndex === -1) {
		return res.status(404).json({
			success: false,
			message: `No example found with ID: ${exampleId}`,
		});
	}

	exampleData.splice(exampleIndex, 1);

	res.status(200).json({
		success: true,
		message: `Example with ID: ${exampleId} deleted successfully`,
	});
};
