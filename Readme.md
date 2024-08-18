# Node Express Backend Template 🚀

Welcome to the Node Express Backend Template! This template is designed to help you kickstart your Node.js and Express backend projects with a structured and scalable setup. It includes essential configurations, examples, and guidelines to streamline your development process. 🌟

## Who is this for? 🤔

This template is designed for:

- **Developers** who are looking to kickstart their Node.js and Express backend projects with a structured setup.
- **Students** and **learners** wanting to understand how to structure a Node.js application with Prisma.
- **Teams** needing a boilerplate for a scalable backend that can be customized and extended according to their project requirements.

## Table of Contents

| Section            | Link                                      |
| ------------------ | ----------------------------------------- |
| Overview           | [Overview](#overview-)                     |
| Learning Resources | [Learning Resources](#learning-resources-) |
| Repo Structure     | [Repo Structure](#repo-structure-)         |
| Features           | [Features](#features-)                     |
| Usage              | [Usage](#usage-%EF%B8%8F)                           |
| Tips for Beginners | [Tips for Beginners](#tips-for-beginners-) |
| Security Tips      | [Security Tips](#security-tips-)           |
| Customize the Template    | [Customize the Template](#customizing-the-template-%EF%B8%8F)       |
| Contribution       | [Contribution](#contribution)             |
| Create a Good ReadMe            | [Creating a good readme](#creating-a-good-readme)                       |

---

## Overview 🌟

This repository provides a comprehensive template for backend projects, designed to streamline the setup process and ensure best practices are followed. It includes configurations for Node.js with Express.js, database integration using Prisma ORM, and essential middleware for authentication and validation. The template is CI/CD ready, making it easy to deploy and maintain. 🚀

### Tech Stack

[Node.js](https://nodejs.org/en/) | [Express](https://expressjs.com/) | [PostgreSQL](https://www.postgresql.org/) | [Prisma ORM](https://www.prisma.io/) | [JWT](https://jwt.io/) | [Bcrypt](https://www.npmjs.com/package/bcrypt) | [Joi](https://www.npmjs.com/package/joi)

### Prerequisites

Make sure you have the following dependencies installed on your machine:

- Node.js - [Download and install Node.js](https://nodejs.org/en/download/)
- PostgreSQL - [Download and install PostgreSQL](https://www.postgresql.org/download/)

---

## Learning Resources 📚

If you're new to backend development, here are some resources to help you get started:

### Node.js and Express.js Basics

- **[Node.js Official Documentation](https://nodejs.org/en/docs/)**: Learn about Node.js, its features, and how to use it. 🟢
- **[Express.js Official Documentation](https://expressjs.com/)**: Get familiar with Express.js and its powerful routing and middleware features. ⚡
- **[MDN Web Docs: HTTP Basics](https://developer.mozilla.org/en-US/docs/Web/HTTP/Overview)**: Understand the basics of HTTP, the protocol used by web servers and clients. 🌐
- **[Codecademy: Learn Node.js](https://www.codecademy.com/learn/learn-node-js)**: An interactive course to help you learn Node.js from scratch. 🎓

### Prisma ORM

- **[Prisma Official Documentation](https://www.prisma.io/docs/)**: Learn about Prisma and how to use it for database interactions. 🔍

### Git and GitHub 🛠️

- **[Git Documentation](https://git-scm.com/doc)**: Learn how to use Git for version control. 🔄
- **[GitHub Guides](https://guides.github.com/)**: Explore guides on using GitHub to host your code and collaborate with others. 🤝

### Additional Learning Paths

- **[FreeCodeCamp: Backend Development](https://www.freecodecamp.org/learn/back-end-development-and-apis/)**: Free courses on backend development and APIs. 🆓
- **[The Odin Project: Node.js](https://www.theodinproject.com/paths/full-stack-javascript/courses/nodejs)**: A comprehensive course on backend development with Node.js. 🛤️

---

## Repo Structure 📁

For more detailed information on each folder and file, please refer to the corresponding README pages linked below:

- **[Controllers](controllers/controller.md):** 🧠 Business logic functions that handle incoming requests and send responses to the client.

- **[Middleware](middlewares/middleware.md):** 🛡️ Middleware functions that handle specific tasks, such as authentication and validation, between the client request and the server response.

- **[Models](models/model.md):** 🗄️ Database ORM models that define the structure and relationships of the database tables.

- **[Prisma](prisma/prisma.md):** ⚙️ Prisma configuration and schema for database management.

- **[Services](services/service.md):** 🛠️ Business logic and authentication services.

- **[Utils](utils/util.md):** 🧰 General, reusable functionalities unrelated to API, such as file manipulation and encryption.

- **[Validators](validations/validation.md):** ✔️ Middleware functions for request object validation.

- **[Routes](routes/route.md):** 🛣️ Route definitions that determine the control flow of the API.

- **[Environment](environment.md):** 🌍 Configuration files for different environments.

- **[Index](index.js):** The main entry point for the application.

---

## Features 🌟

- **Structured Node.js and Express.js Setup**: A pre-configured setup for building robust and scalable backend applications. 🛠️
- **Prisma ORM Integration**: Easily connect to SQL databases with Prisma ORM. 🗃️
- **Basic Authentication**: Middleware for user authentication and authorization using JWT (JSON Web Tokens). 🔐
- **Organized Code Structure**: Well-defined folders for controllers, models, routes, and more. 🗂️
- **Validation Middleware**: Ensures incoming requests are validated. ✅
- **Environment Management**: Manage environment-specific settings using `.env` files. 🌍
- **Error Handling**: Centralized error handling to manage and log errors. 🚨
- **Security Basics**: Basic security settings to protect your application. 🔒
- **Detailed Documentation**: Instructions and explanations for easy navigation and learning. 📚

---

## Usage ⚙️

For detailed instructions on how to use this template, including examples, please refer to the [Usage Guide](documents/usage.md). Follow these steps to get started: 🚀

### Getting Started

1. Clone this repository to your local machine using the following command:

   ```bash
      git clone https://github.com/MettaSurendhar/node-express-backend-template-using-prisma.git <project_name>
   ```

2. Navigate to the project directory:

   ```bash
      cd <project_name>
   ```

3. Install the dependencies:

   ```bash
      npm install
   ```

4. Create a new PostgreSQL database for your project.
5. Modify env files in the root directory of the project.

6. Modify the `schema.prisma` file in the `prisma` directory to match your database schema.

7. Run the following command to generate the Prisma client:

   ```bash
   npx prisma generate
   ```

8. Run the following command to start the development server:

   ```bash
   npm run dev
   ```

The server should now be running at http://localhost:5000.

> Note: Don't forget to uncomment the .env files in .gitignore file if you want to push your code to a remote repository.

---

## Tips for Beginners 💡

### Take it Step-by-Step 🐢

- **Start Small**: Focus on understanding one part of the codebase at a time. 🧩
- **Use Documentation**: Refer to `README.md` files for each folder to understand their purpose and usage. 📄
- **Experiment**: Modify small parts of the code to see how it affects the application. 🛠️

### Use the Resources 🌐

- **Official Docs**: Check Node.js, Express.js, and Prisma documentation for more details. 📚
- **Community Help**: Seek assistance in forums like [Stack Overflow](https://stackoverflow.com/) or [Reddit’s LearnProgramming](https://www.reddit.com/r/learnprogramming/). 💬

### Don’t Rush ⏳

- **Take Breaks**: Learning to code can be intense. 🌟
- **Focus on Understanding**: Ensure you understand each concept thoroughly. 🎯

---

## Security Tips 🔒

- **Keep Dependencies Updated**: Regularly update your project dependencies to patch any security vulnerabilities. 🔄
- **Validate Inputs**: Always validate and sanitize user inputs to prevent injection attacks. 🛡️
- **Use Environment Variables**: Store sensitive information in environment variables and never hard-code them into your application. 🌍
- **Enable HTTPS**: Ensure your application uses HTTPS to encrypt data transmitted between the client and server. 🔐

---

## Customizing the Template 🛠️

To tailor this template to your specific needs, follow these steps:

### 1. **Update Environment Variables**

- **Edit `.env` File**: Configure environment variables in the `.env` file located in the root directory. You can set different configurations for development, staging, and production by creating respective `.env.development`, `.env.staging`, and `.env.production` files. Refer to the [Environment Configuration](environment.md) documentation for details.

### 2. **Modify Database Configuration**

- **Update Prisma Schema**: Customize your database schema by editing `schema.prisma` in the `prisma` folder. Define your data models and relationships here. For more information, see [Prisma Configuration](/prisma/prisma.md).
- **Adjust Database Credentials**: Change the database connection settings in your `.env` file to match your database setup.

### 3. **Customize Middleware**

- **Edit Middleware**: Modify or add new middleware functions in the `middlewares` folder. Update the `middleware.md` file with any new middleware functionalities you introduce. Review existing middleware in `exampleMiddleware.js` for guidance.

### 4. **Update Controllers**

- **Adjust Business Logic**: Customize controller functions in the `controllers` folder. Update `controller.md` with explanations of new controller functionalities. Refer to `exampleControllers.js` for examples on how to structure your controllers.

### 5. **Revise Routes**

- **Modify Routes**: Update route definitions in the `routes` folder. Adjust `v1/exampleRouter.js` or add new route files as needed. Document any new routes or changes in the `route.md` file.

### 6. **Adapt Models**

- **Edit ORM Models**: Modify the database models in the `models` folder. Update `model.md` with details on the data models you use. Refer to `exampleModel.js` for examples of model structure.

### 7. **Adjust Utilities**

- **Update Utility Functions**: Modify or add utility functions in the `utils` folder. Update `util.md` with new utilities or changes. Refer to `hashPassword.js` for examples.

### 8. **Configure Validations**

- **Modify Validation Rules**: Update validation schemas and rules in the `validations` folder. Document any changes in `validation.md` and see `exampleValidation.js` for examples of validation rules.

### 9. **Set Up Additional Services**

- **Customize Services**: Update or add new services in the `services` folder. Adjust `service.md` to include new service functionalities. Refer to `jwtAuth.js` for examples.

### 10. **Adjust Documentation**

- **Update Documentation**: Ensure all changes are reflected in the documentation. Update or add new `.md` files as needed to keep documentation accurate and helpful.

By following these steps, you can effectively customize the template to fit your project requirements. If you need further customization, refer to the detailed documentation provided in each folder.

---

## Creating a Good README

A well-crafted README is essential for any project. It serves as the first point of contact for users and contributors, providing them with a clear understanding of the project’s purpose, setup instructions, and contribution guidelines.For suggestions on how to create a good README, please refer to the [Good README Guide](good-readme.md).

## Contribution

Contributions to enhance the structure or add new features to this boilerplate are welcome. Here are some ways you can contribute:

- **Reporting Bugs**: If you find a bug, please report it by opening an issue.
- **Feature Requests**: If you have an idea for a new feature, feel free to suggest it.
- **Pull Requests**: If you want to contribute code, fork the repository and create a pull request with your changes.

Please check out our [Contributing Guide](contributing.md) for more details.

## License

This project is licensed under the MIT License. This means you are free to use, modify, and distribute the software, provided that you include the original copyright and license notice in any copies of the software. For more details, see the [LICENSE](LICENSE) file.

---

## [❤️ Sponsor Me](https://github.com/sponsors/MettaSurendhar)

**If you appreciate my work and would like to support me, consider sponsoring me!** Your support helps me continue to create and maintain open-source projects.

- **Why Sponsor?**: Sponsoring helps sustain the development of open-source projects and allows creators to dedicate more time to their work.

## [🍴 Fork this Repository](https://github.com/MettaSurendhar/express-api-boilerplate/fork)

**Fork this repository to customize or contribute to the project!** Forking allows you to make changes independently and contribute back through pull requests.

- **Why Fork?**: Forking lets you create your own copy of the project for personal modifications or development, and it enables collaboration through pull requests.

## [🌟 Star this Repository](https://github.com/MettaSurendhar/express-api-boilerplate)

**Show your support by starring this repository!** Starring helps us gauge interest and lets others know that this project is valuable.

- **Why Star?**: Starring helps indicate the project's usefulness and can attract more contributors.

## [📄 Use This Template](https://github.com/new?template_name=node-express-backend-template-for-intermediate&template_owner=MettaSurendhar)

This repository is designed as a **template** for creating Express.js APIs. You can use this template to kickstart your own projects by clicking the **Use this template** button on GitHub.
