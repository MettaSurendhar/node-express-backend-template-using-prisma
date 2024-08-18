# Services 🔧

## JWT Authentication Service 🔐

### Purpose 🎯

The `jwtAuth.js` file provides utility functions for handling JSON Web Tokens (JWT), crucial for securing user sessions and protecting API routes.

### Example Usage 🚀

📦 **`jwtAuth.js`:** Offers two main functions:

- **`createJWT(email):`** Generates a JWT for a given email, typically used when a user logs in.
- **`verifyJWT(token):`** Validates a JWT to ensure it is legitimate, commonly used to protect routes.

### Customization 🎨

- **Token Expiration:** Adjust the expiration time in `createJWT` as needed.
- **Signing Algorithm:** Customize the algorithm via the `SIGNING_ALGO` environment variable.
- **Secret Key:** Ensure your `JWT_SECRET` is securely set in the environment.

### Additional Files 📂

The `services` folder can include other utility files like:

- **`emailService.js`:** Handles email sending functions.
- **`paymentService.js`:** Manages payment processing and integrations.
- **`hashingService.js`:** Provides functions for hashing and verifying passwords.

Feel free to expand the `services` folder with additional utilities that fit your application's needs! 🔍
