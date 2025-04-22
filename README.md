# Dogs Service - NestJS CRUD API

A simple NestJS application that demonstrates basic CRUD operations using in-memory storage. Built as part of an assignment to learn controllers, routing, and error handling.

---

## Features

- `GET /dogs` — Get all dogs
- `POST /dogs` — Add a new dog
- `GET /dogs/:id` — Get a dog by ID
- `PUT /dogs/:id` — Update a dog by ID
- `DELETE /dogs/:id` — Delete a dog by ID

Includes:

- In-memory data store
- Proper use of NestJS decorators: `@Controller`, `@Get`, `@Post`, `@Body`, `@Param`
- Error handling for not-found cases

---

#### Install dependencies

`npm install`

#### Start the server

`npm run start`

## Example Request

### Create a Dog

```http
POST /dogs
Content-Type: application/json

{
  "name": "Max",
  "age": 4
}
```
