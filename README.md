# App Setup and Configuration Guide

Follow these steps to set up and configure the application to run it locally.

## Prerequisites

Make sure you have the following softwares installed on your system:

- [Node.js](https://nodejs.org) (version 14 or higher)
- [Yarn](https://yarnpkg.com) (version 1.22 or higher)

#### Step 1: Clone the Repository

Start by cloning the repository:

```shell
git clone https://github.com/azevedev/api-node-pilab
```

#### Step 2: Install Dependencies

Navigate to the root directory and install the project dependencies using Yarn:

```shell
cd api-node-pilab
yarn install
```

This will download and install all the required dependencies specified in the `package.json` file.

#### Step 3: Build the Application

To build the TypeScript code into JavaScript, run the following command:

```shell
yarn build
```

This will compile the TypeScript code and generate the JavaScript output in the designated directory (e.g., `dist`).

#### Step 4: Start the Application

Once the build process is complete, you can start the application locally using the following command:

```shell
yarn start
```
This will run the compiled TypeScript code inside `dist` on your local machine using Node.

To use the TypeScript files on your server, meaning run it as a dev, use:

```shell
yarn dev
```

And that's it! You can test the application on `http://localhost:3333/api/v1`. Make sure it's the correct port.

Feel free to explore and customize the code according to your requirements. Cheers!
