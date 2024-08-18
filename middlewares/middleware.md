# Middleware 📋

## Middleware - Example Middleware Functions 🧠

### What is Middleware? 🤔

Middleware functions are special functions that sit between the client’s request and the server’s response. They perform important tasks such as checking if a user is authorized, validating data, or logging information.

### Purpose 🎯

This file contains middleware functions used to process requests before they reach the route handlers. Middleware functions can be used for logging, validation, and other request processing tasks.

### Structure 🗂️

- **Each middleware function** performs a specific action or set of actions on incoming requests.
- **Functions within this file** are responsible for:
  - **Logging Request Details:** Recording information about each request for debugging purposes.
  - **Validating Request Data:** Ensuring that necessary fields are present in the request body for creating or updating records.

#### Example - `exampleMiddleware.js` 📦

- **`logRequestDetails:`** Logs the HTTP method and URL of each incoming request. Useful for tracking and debugging requests.
- **`validateExampleData:`** Checks if the `name` and `description` fields are present in the request body for POST and PUT requests. Responds with a 400 error if any fields are missing.

### Usage 🚀

To use these middleware functions in your Express.js application, integrate them as follows:

```javascript
const express = require('express');
const {
	logRequestDetails,
	validateExampleData,
} = require('./middleware/exampleMiddleware');

const app = express();

app.use(express.json()); // Middleware to parse JSON requests
app.use(logRequestDetails); // Apply logging middleware

// Define routes with validation middleware
app.post('/api/examples', validateExampleData, (req, res) => {
	// Create example logic
});

app.put('/api/examples/:id', validateExampleData, (req, res) => {
	// Update example logic
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
	console.log(`Server is running on port ${PORT}`);
});
```

### Customization 🛠️

- **Modify the Function:** Customize the exampleMiddleware function to suit your needs, such as adding authentication checks or logging more detailed information.

- **Add More Middleware:** Feel free to add additional middleware functions to handle different aspects of request processing.

Explore and adjust the middleware functions as needed for your application’s requirements! 🔍
