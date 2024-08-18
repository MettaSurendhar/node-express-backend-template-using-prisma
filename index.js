// Load environment variables from .env files based on the current environment
require('dotenv-flow').config();

const express = require('express');
const cors = require('cors');
const morgan = require('morgan');

const app = express();

// MIDDLEWARES

// Enable Cross-Origin Resource Sharing
app.use(cors());

// Middleware to parse JSON request bodies
app.use(express.json());

// Conditionally apply morgan for logging in development mode
if (process.env.NODE_ENV === 'development') {
	app.use(morgan('dev'));
}

// Route handler for all API routes
app.use('/api', require('./routes'));

// Route handler for the root URL
app.get('/', (req, res) => {
	res.send(
		'<h1> Made with ❤️ by <a href="https://github.com/MettaSurendhar/">Metta Surendhar</a> </h1>'
	);
});

// Define the port for the server to listen on, defaulting to 5000
const port = process.env.PORT || 5000;

// Start the server and log a message when it's running
app.listen(port, async () => {
	console.log(`✅ Server listening on port ${port}`);
});
