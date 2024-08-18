# Routes Overview 📋

## Main Router and Versioning 🧠

### Introduction 🧠

This documentation provides an overview of the routing setup for the application, covering the main router, version-specific routes, and resource-specific routes. Proper routing is essential for handling incoming requests and directing them to the appropriate controllers and middleware.

### Files and Their Purpose

#### `routes/index.js`

This file sets up the main router for the application. It defines the root route and version-specific routes.

#### Example Usage 🚀

- **Root Route (`/`)**: Provides a basic JSON message indicating that the API route has been accessed.
- **Versioned Routes (`/v1`)**: Routes for version 1 of the API are included here. Future versions can be added by configuring additional routes as needed.

#### `routes/v1/index.js`

This file configures the routes for version 1 of the API. It includes the root route for version 1 and sub-routes for specific resources.

#### Example Usage 🚀

- **Version 1 Root Route (`/v1`)**: Returns a basic JSON message indicating that version 1 of the API route has been accessed.
- **Resource Route (`/v1/example`)**: This route handles operations related to the `example` resource and is defined in the `exampleRouter`.

#### `routes/v1/exampleRouter.js`

Defines routes for handling CRUD operations related to the `example` resource within version 1 of the API.

#### Example Usage 🚀

- **GET `/example`**: Retrieve all example records.
- **GET `/example/:id`**: Retrieve a specific example record by ID.
- **POST `/example`**: Create a new example record.
- **PUT `/example/:id`**: Update an existing example record by ID.
- **DELETE `/example/:id`**: Delete an example record by ID.

### Integration 🛠️

To integrate these routes into your Express application, ensure that:

1. **`routes/index.js`** is mounted in the main application file to handle `/api` routes.
2. **`routes/v1/index.js`** is included in the version 1 routing setup to handle `/v1` routes.
3. **`routes/v1/exampleRouter.js`** is used for the `example` resource routes within version 1.

Make sure to import and use the appropriate middleware and controllers in `exampleRouter.js` to handle route-specific logic.

### Customization 🛠️

- **Expand Routes:** Add or modify routes as necessary to cover additional resources or functionalities.
- **Integrate Middleware & Controllers:** Import and integrate middleware and controller functions to handle route logic as needed.

Feel free to explore, adapt, and enhance the routing setup to match your application’s requirements! 🔍
