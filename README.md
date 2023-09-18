# People Election With React + TypeScript + Vite

This is a people election project developed using Vite, ReactJS, TypeScript, ReactQuery, FaunaDB and Auth0. It allows you to record votes, track the vote count, and visualize election results in a simple and efficient manner.

# Prerequisites
Before getting started, make sure you have the following tools installed on your machine:

Node.js - Ensure you have Node.js installed to run the development environment.

# Installation
Follow these steps to set up and run the project:

1 - Clone this repository to your local environment:

```
   git clone https://github.com/gugavillar/comdica-election.git
   cd comdica-election
```

2 - Install project dependencies

```
   npm install
```
or
```
   yarn install
```

# Usage
Before you run the project you nedd to create a env file based on the example configuration in the .env.example file, maybe you need to create a account in [fauna](https://fauna.com/) and [auth0](https://auth0.com/)

You can follow the configuration in docs to create the API keys.

To start the development server and view the project in your web browser, run the following command:

```
   npm run dev
```
or
```
   yarn dev
```

This will start the development server and automatically open the project in your default web browser. You can access the people election app at http://localhost:5173

# Features
- Record votes for different candidates.
- Store votes in the faunaDB.
- Visualize candidates positions in home page.
- Need user and login to add votes to the candidates.
