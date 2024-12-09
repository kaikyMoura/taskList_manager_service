# TaskList_Manager_Service #


## Introduction
This project represents the back-end implementation of the TaskList_Manager, a WebApp/PWA designed for task management.

The application was developed using Express and TypeScript, leveraging modern technologies such as Google GenAI for image processing to enhance functionality and provide an efficient user experience.


## Installation

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
pnpm dev
# or
bun dev

```

The application will run at the following address: http://localhost:5000.

...
