# D10React
SpecBee Assignment

To set up the "D10React" project locally with DDEV, follow these steps:

Install DDEV on your local machine.

Clone the "D10React" repository into the machine.Follow the steps to run the project on your machine:
Drupal

The /D10React directory contains a Drupal 10 project with basic configuration for JSON:API, and to demonstrate embedding a React application inside a Drupal theme or module.

Install all the Drupal dependencies:

cd drupal
composer install
Then import the database snapshot in D10React/backup.sql.

The default admin account is root/root.

If you're using ddev this contains ddev configuration and can be started with:

# ddev config
ddev config
# Start ddev.
ddev start
# Install/update composer dependencies.
ddev composer install
# Import the database snapshot.
ddev import-db --src=./backup.sql

# Decoupled React Application

The /react_app directory contains an example decoupled React application built with create-react-app. It is built to interact with the API provided by Drupal installed in /D10React.

To download dependencies and start the local development server run:

cd react_app

# Install
npm install
# Run App
npm run start
You might need to update some configuration to make sure it points to your local Drupal installation.

To avoid fetch API errors, add the "moesif-origin-cors-change" extension to your Chrome browser.

Following these steps will set up the "D10React" project locally, allowing you to run both the Drupal backend and the React frontend.
