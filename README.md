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

## Usage

- To use this locally, start by creating an account in the [Google Cloud console](https://console.cloud.google.com/).Next, you'll need to set up a Billing account (don’t worry, you can use it for free—just set up alerts to ensure you don’t exceed the $300 credit limit). Once that’s done, create a service account (you can configure it with admin credentials if needed). From there, you can download a key to use locally under the Keys section. I recommend following the Google Cloud documentation for a step-by-step guide, as it covers all the actions you can take and how to execute them. And don’t forget to create a bucket—just search for “Cloud Storage” in the search bar, and from there, you can create and configure your bucket.

- Useful Tutorials:
- [Starting free trial and creating a project](https://youtu.be/NNPtzkCFFBw)

- [Billing account](https://support.uidaho.edu/TDClient/40/Portal/KB/ArticleDet?ID=2462)

- [IAM documentation to create a service account](https://cloud.google.com/iam/docs/service-accounts-create?hl=pt-br)

- For using the Generative API and Cloud Storage, check the following documentation:
  
- [Gemmini Ai Api docs](https://cloud.google.com/docs/generative-ai)

- [Google Cloud Storage Node.js Client Library](https://cloud.google.com/nodejs/docs/reference/storage/latest)

- After completing the setup, simply add your credentials file to the root of your project and specify the bucket name:

![Vs Code](https://github.com/user-attachments/assets/038fc99f-cfd6-4f5b-a7b7-e69846d964b1)

And:

![Captura de Tela (36)](https://github.com/user-attachments/assets/1d62210d-fc28-4ac6-8b32-9cfa49ec5672)
