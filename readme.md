# Deploying Node.js project

## Getting started

To get the project running locally, 

- Clone this repository by running `git clone https://github.com/bahdcoder/deploying-node-js-book-project.git`
- Run `yarn` to install all project dependencies.
- Run `yarn dev` to start the development server

## Code review

### Dependencies
- [Express.js](https://expressjs.com) - The server for handling and routing HTTP requests
- [Mongoose](https://github.com/Automattic/mongoose) -  For modeling and mapping MongoDB data to javascript
- [@fullstackjs/mail](https://github.com/bahdcoder/friendly-mail) - For sending emails via multiple providers in the application
- [Dotenv](https://github.com/motdotla/dotenv) - Defines environment variables for project using a `.env` file.

### Application structure
- `server/` - The source code for all server side routes and endpoints
- `client/` - The source code for all the client side code
- `server/config/index.js` - Defines the configuration file from environment variables
- `.env` - Defines environment variables

## Functionality overview
Users can:

- Register with their name, email and password
- Login with email and password
- Logout of application
- Forget and reset passwords

## Build project
To create a production build, make sure the `NODE_ENV` is set to `PRODUCTION` in the `.env` file. Then, run `yarn build`.

## Start project in production
To start project in production, run `yarn start`
