# Controllers 📋

## Controllers - Business Logic Functions 🧠

### Overview 🌐

This folder contains the business logic functions that handle incoming requests and send responses to the client. These functions form the core of your application’s API, deciding how to process data and interact with other parts of the system.

### Structure 🗂️

- **Each controller file** corresponds to a specific API endpoint or resource, such as users, products, or orders.
- **Functions within each controller** are responsible for:
  - **Processing Requests:** Receiving data from client requests and extracting parameters or body content.
  - **Executing Business Logic:** Performing operations like querying a database, manipulating data, or interacting with external APIs.
  - **Sending Responses:** Returning the results back to the client in a structured format (e.g., JSON), along with appropriate HTTP status codes.

### Purpose 🎯

The purpose of these controllers is to abstract and organize the logic required to manage the different resources of your application, keeping your code modular and maintainable.

#### Example 🚀

📦 **`exampleController.js`:** Manages example-related requests such as retrieving, creating, updating, or deleting example records.

- **`getAllExamples:`** Handles GET requests to fetch all example records. Typically used to display a list of all items.
- **`getExampleById:`** Handles GET requests for a specific example record by ID. Useful for viewing details of a single item.
- **`createExample:`** Handles POST requests to add a new example record. Used when a client submits a form to create a new item.
- **`updateExample:`** Handles PUT requests to modify an existing example record by ID. Allows clients to update details of an item.
- **`deleteExample:`** Handles DELETE requests to remove an example record by ID. Used when an item needs to be permanently deleted from the database.

Feel free to explore and modify the controller files to suit your application’s needs! 🔍

### Usage 🚀

These functions can be tied to specific routes in your application, allowing them to handle incoming API requests. For instance, you might set up the following routes:

```javascript
const express = require('express');
const router = express.Router();
const exampleController = require('./controllers/exampleController');

router.get('/examples', exampleController.getAllExamples);
router.get('/examples/:id', exampleController.getExampleById);
router.post('/examples', exampleController.createExample);
router.put('/examples/:id', exampleController.updateExample);
router.delete('/examples/:id', exampleController.deleteExample);

module.exports = router;
```

### How It Works 🛠️

- **Define Routes:** The routes are defined in the routes/exampleRoutes.js file. Each route corresponds to an API endpoint that your client can interact with.

- **Map Routes to Controller Functions:** Each route is linked to a specific function in the exampleController.js. For instance, a GET request to /api/examples will invoke the getAllExamples function to retrieve all example records.

- **Middleware Integration:** You can easily integrate these routes with your main application by importing the router in your app.js or index.js file:

#### Testing the API: With this setup, you can now test your API using tools like Postman or curl. For example:

- GET /api/examples: Retrieve all example records.
- GET /api/examples/1: Retrieve the example record with ID 1.
- POST /api/examples: Create a new example record.
- PUT /api/examples/1: Update the example record with ID 1.
- DELETE /api/examples/1: Delete the example record with ID 1

### Customization 🛠️

- **Adjust Routes:** Feel free to modify the routes or controller logic to fit the specific needs of your application.

- **Add Middleware:** You can integrate authentication, validation, or other middleware to enhance your API's functionality and security.
