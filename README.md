# Simple CRUD API with Node.js, Express, and Mongoose

This is a basic CRUD (Create, Read, Update, Delete) API built with Node.js, Express, and MongoDB using Mongoose for schema modeling. It provides endpoints to manage users with basic username and password fields.

## Getting Started

### Prerequisites

Before running this application, ensure you have the following installed on your local machine:

- Node.js
- npm (Node Package Manager)
- MongoDB

### Installation

1. Clone this repository to your local machine:

```bash
git clone https://github.com/example-user/simple-crud-api-node-express-mongoose-es6.git
```

2. Navigate to the project directory:

```bash
cd simple-crud-api-node-express-mongoose-es6
```

3. Install dependencies:

```bash
npm install
```

### Configuration

Before running the application, ensure that MongoDB is running on your local machine. If MongoDB is running on a different host or port, you can configure the connection URL in `index.js`.

### Usage

To start the server, run the following command:

```bash
yarn dev 
or
npm run dev
```

The server will start running on port 3033 by default(if dotnev working properly). You can access the API endpoints using any HTTP client.

### API Endpoints

- `POST /api/users`: Create a new user.
- `GET /api/users`: Retrieve all users.
- `PUT /api/users/:username`: Update a user's password.
- `DELETE /api/users/:username`: Delete a user.

### Sample Request and Response

#### Create User (POST /api/users)

Request:

```json
{
  "username": "Shariar",
  "password": "Shari123"
}
```

Response (201 Created):

```json
{
  "message": "User created successfully",
  "user": {
    "_id": "607484189a58c925e869a5e1",
    "username": "Shariar",
    "password": "Shari123"
  }
}
```