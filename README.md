# Grainger Product List

## Introduction

This is for the Senior SWE coding interview with Grainger.

This application saves and displays different products.

There are 3 components to this project:

- Postgres DB
- Java Spring API
- React UI

## Getting started
There are 2 ways to start the application:

- Docker
- Starting each service

### Docker

To start the application with docker, ensure you have the following prerequisites:

- Docker desktop installed locally
- docker-compose installed locallly

Once you have the prerequisites, simply navigate to the root of the repository and run:
`docker-compose build`

Once the build is complete, run:

`docker-compose up`

Then head to http://localhost:80 to verify the application is running.

### Starting each service

#### Installing and starting Postgres DB
1. Download postgres (https://www.postgresql.org/download/) and start the service on port **5432**.
    - *Note*: Ensure there is a user where username = admin and password = admin
2. Connect to the server using either the CLI client, or a GUI Client.
3. Run the SQL file: db/schema.sql
4. Verify the table `products` was created

#### Starting the Java Spring API
1. Install Java 23 (https://www.oracle.com/java/technologies/javase/jdk23-archive-downloads.html)
2. Install Gradle 8.13
3. Navigate to `api/`
4. Run the following commands:
   - `./gradlew build`
   - `./gradlew bootRun`

#### Starting the React Webpack Server
1. Install Node 22.14.0 (https://nodejs.org/en/blog/release/v22.14.0)
2. Install NPM 10.9.2 (if not installed with Node)
3. Navigate to `ui/`
4. Run the following commands:
   - `npm install`
   - `npm run start`
5. Verify the server started by heading to http://localhost:3000 in your browser


    

