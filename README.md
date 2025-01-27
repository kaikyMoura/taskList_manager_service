# TaskList_Manager_Service #


## Introduction

This project represents the back-end implementation of the TaskQuest, a WebApp designed for task management.

The application was developed using Express and TypeScript, leveraging modern technologies such as Google GenAI for image processing to enhance functionality and provide an efficient user experience.


## Installation

### - Important:

In this project, I’m using pnpm, but feel free to use any package manager of your choice. Just refer to the documentation for guidance on how to use it effectively.

### 1. Check Node.js Version

Ensure Node.js is installed by running:

``` bash    
node -v
```
If Node.js is not installed, download it from the official [Node.js website](https://nodejs.org/pt). Update **npm** if needed:
    
``` bash
npm install -g npm
```

### 2. Cloning the Repository

Clone the repository to your local machine. 

Open your terminal and execute the following command:

```bash
git clone https://github.com/kaikyMoura/taskList_manager_service.git
```

Navigate to the project directory:

```bash
cd taskList_manager_service
```

### 3. Install Dependencies

Use your preferred package manager to install the required dependencies:

```bash

npm install
# or
yarn install
# or
pnpm install
# or
bun install

```


## Database Setup
This project uses PostgreSQL as the database.

1. If PostgreSQL is not installed, download and install it by following the instructions for your operating system from the 
[official PostgreSQL website](https://www.postgresql.org/download/).

2. This project uses [Prisma](https://www.prisma.io/) as the ORM.

To apply database migrations, use one of the commands below based on your package manager:

  ```bash
  npx prisma migrate dev
  # or
  pnpm prisma migrate dev
  # or
  yarn prisma migrate dev
  ```

3. Additionally, manually create the database in PostgreSQL and define a .env file in the project's root directory with the following content:

  ```bash
  DATABASE_URL="postgresql//<username>:<password>@localhost:5432/<dbname>
  ```
Replace < username >, < password >, and < dbname > with your PostgreSQL credentials and the database name.


## Running the Project

With the dependencies installed, you can start the development server using:

```bash

npm run dev
# or
yarn dev
# or
pnpm run dev
# or
bun dev

```

The application will run at the following address: [http://localhost:5000.](http://localhost:5000)


## Documentation

This project uses a variety of dependencies to support its functionality, ranging from development tools to runtime libraries. 

Below is a detailed overview of the libraries used:

### Dependencies

These are essential for the core functionality of the application:

- [typescript](https://www.typescriptlang.org): TypeScript compiler for type checking and transpilation.
- [prisma](https://www.prisma.io): CLI tool for managing Prisma migrations and database interactions.
- [@prisma/client](https://www.prisma.io/docs/orm/prisma-client): Provides a type-safe ORM to interact with the database.
- [jest](https://jestjs.io): JavaScript testing framework for unit and integration tests.
- [supertest](https://www.npmjs.com/package/supertest): Library for testing HTTP endpoints.
- [ts-jest](https://www.npmjs.com/package/ts-jest): Enables Jest to work with TypeScript.
- [@google/generative-ai](https://www.npmjs.com/package/@google/generative-ai): Integrates Google's generative AI for advanced image processing and content generation.
- [@google-cloud/storage](https://www.npmjs.com/package/@google-cloud/storage): Provides a powerful and scalable solution for managing files in Google Cloud Storage, including uploads, downloads, and bucket operations.
- [body-parser](https://www.npmjs.com/package/body-parser): Middleware for parsing incoming request bodies in JSON format.
- [cross-env](https://www.npmjs.com/package/cross-env): Enables setting environment variables across different operating systems.
- [dotenv](https://www.npmjs.com/package/dotenv): Loads environment variables from a .env file into process.env.
- [express](https://expressjs.com): The main framework used for building the back-end.
- [http-errors](https://www.npmjs.com/package/http-errors): Simplifies creating HTTP error responses.
- [morgan](https://www.npmjs.com/package/morgan): Logs HTTP requests for debugging purposes.
- [multer](https://www.npmjs.com/package/multer): Handles file uploads, especially useful for processing images.
- [nodemon](https://www.npmjs.com/package/nodemon): Automatically restarts the application during development when file changes are detected.
- [uuid](https://www.npmjs.com/package/uuid): Generates unique IDs for data objects.
