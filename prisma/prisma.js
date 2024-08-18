// prisma/prisma.js

// Importing the PrismaClient from the Prisma package
const { PrismaClient } = require('@prisma/client');

// Initializing the PrismaClient with the database connection URL
const prisma = new PrismaClient({
	datasources: {
		db: {
			url: process.env.DATABASE_URL, // Database URL from environment variables
		},
	},
});

// Connecting to the database and handling success and failure cases
prisma
	.$connect()
	.then(() => {
		console.log('✅ Database connected successfully');
	})
	.catch((err) => {
		console.log('❌ Database connection failed');
		console.log(err);
	});

// Exporting the PrismaClient instance for use in other parts of the application
module.exports = prisma;
