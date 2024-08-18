# Utils ⚙️

## Password Hashing Utility 🔑

### Purpose 🎯

The `hashPassword.js` file provides utility functions for hashing and verifying passwords, which is essential for securely storing user credentials.

### Example Usage 🚀

📦 **`hashPassword.js`:** Includes two main functions:

- **`hashPassword(password):`** Hashes a plaintext password using bcrypt, typically used before storing a password in the database.
- **`verifyPassword(password, dbpass):`** Verifies a plaintext password against a hashed password, commonly used during user login.

### Customization 🎨

- **Salt Rounds:** Adjust the number of salt rounds in `hashPassword` by changing the parameter in `genSaltSync`. More rounds increase security but also processing time.

### Additional Files 📂

The `utils` folder can include other utility files like:

- **`formatDate.js`:** Functions for formatting dates and times.
- **`generateUniqueId.js`:** Utility to generate unique IDs for users or records.
- **`logger.js`:** Custom logging utility for debugging and monitoring.

Feel free to expand the `utils` folder with additional functions that enhance your application's capabilities! 🔍
