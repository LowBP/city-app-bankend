
# City Explorer Backend

## Table of Contents

1. [API Documentation](#api-documentation)
    - [1. Get Cities](#1-get-cities)
    - [2. Get City by Name](#2-get-city-by-name)
2. [Error Handling](#error-handling)
3. [Getting Started](#getting-started)
    - [Prerequisites](#prerequisites)
    - [Installation](#installation)
    - [Starting the App](#starting-the-app)
    - [Running Tests](#running-tests)
4. [Using the API](#using-the-api)
5. [Additional Notes](#additional-notes)

---

## API Documentation

### 1. Get Cities

- **Endpoint:**
  - `GET /cities`

- **Description:**
  - Retrieve a list of cities with optional search, sorting, and pagination.

- **Query Parameters:**
  - `search` (optional): Search for cities by name or other properties.
  - `sortBy` (optional): Field to sort by (`population`, `founded`, `name`).
  - `sortOrder` (optional): Sorting order (`asc` or `desc`).
  - `page` (optional): Page number for pagination.
  - `pageSize` (optional): Number of items per page for pagination.

- **Example:**
  - Retrieve all cities:
    ```
    GET /cities
    ```

  - Retrieve cities with search and pagination:
    ```
    GET /cities?search=Sydney&page=1&pageSize=5
    ```

  - Retrieve cities sorted by population in descending order:
    ```
    GET /cities?sortBy=population&sortOrder=desc
    ```

- **Response:**
  - Status Code: 200 OK
  - Body:
    ```json
    {
      "totalCities": 8,
      "totalPages": 1,
      "currentPage": 1,
      "pageSize": 5,
      "cities": [
        {
          // City details
        },
        // ... more cities
      ]
    }
    ```

### 2. Get City by Name

- **Endpoint:**
  - `GET /cities/:name`

- **Description:**
  - Retrieve detailed information about a specific city by its name.

- **Example:**
  - Retrieve details for Sydney:
    ```
    GET /cities/Sydney
    ```

- **Response:**
  - Status Code: 200 OK
  - Body:
    ```json
    {
      // City details
    }
    ```

- **Error Responses:**
  - Status Code: 404 Not Found
    ```json
    {
      "error": "City not found"
    }
    ```

---

## Error Handling

- **400 Bad Request:**
  - Returned for invalid query parameters or requests.

- **404 Not Found:**
  - Returned when a requested resource is not found.

- **500 Internal Server Error:**
  - Returned for unexpected server errors.

---

## Getting Started

### Prerequisites

Before running the application, make sure you have the following installed:

- [Node.js](https://nodejs.org/)
- [npm](https://www.npmjs.com/) (Node Package Manager)

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/LowBP/city-app-bankend.git
   ```

2. Navigate to the backend directory:

   ```bash
   cd city-app-bankend
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

### Starting the App

To start the Express.js application, run the following command:

```bash
npm start
```

This will start the server, and you should see a message indicating that the server is running on `http://localhost:3001`.

### Running Tests

To run tests for the backend, execute the following command:

```bash
npm test
```

This will run the test suite and provide information about the tests executed and their results. Make sure the server is not running while running the tests.

---

## Using the API

Once the server is running, you can interact with the API using tools like [Postman](https://www.postman.com/) or [curl](https://curl.se/). Refer to the API documentation section for details on available endpoints, query parameters, and response formats.

---

## Additional Notes

- Ensure that the server is running before making requests.
- Simulated delays are added to certain endpoints to mimic real-world scenarios.

Feel free to adapt this guide based on your project structure and specific requirements. Providing clear instructions on how to start the app and run tests will make it easier for others to use and contribute to your project.
