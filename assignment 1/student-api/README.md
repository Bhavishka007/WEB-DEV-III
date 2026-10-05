# Student Management REST API

Backend REST API built with **Node.js + Express.js** for managing student records using in-memory array/JSON data (no database, no Mongoose).

## Project Structure
```
student-api/
├── app.js
├── package.json
├── routes/
│   └── studentRoutes.js
├── middleware/
│   └── logger.js
└── data/
    └── students.js
```

## Setup & Run

1. Install dependencies:
   ```
   npm install
   ```
2. Start the server:
   ```
   npm start
   ```
3. Server runs at: `http://localhost:3000`

## API Endpoints

| Method | Endpoint         | Description              |
|--------|------------------|---------------------------|
| GET    | /students        | Get all students          |
| GET    | /students/:id    | Get a single student      |
| POST   | /students        | Create a new student      |
| PUT    | /students/:id    | Update an existing student|
| DELETE | /students/:id    | Delete a student          |

## Sample Request Bodies (POST / PUT)
```json
{
  "name": "Sneha",
  "course": "MCA",
  "age": 22
}
```

## Status Codes Used
- `200` Success
- `201` Created
- `400` Bad Request (missing/invalid input)
- `404` Not Found (student or route doesn't exist)
- `500` Internal Server Error (unexpected errors)

## Testing with Postman
1. Open Postman and create a new collection called "Student Management API".
2. Add requests for each endpoint above, pointing to `http://localhost:3000`.
3. For POST/PUT, set the body type to `raw` → `JSON` and use the sample body above.
4. Check the terminal — the custom logger middleware prints the method, URL, and timestamp for every request.

## Notes
- Data resets every time the server restarts (in-memory array, not persisted).
- Built following the modular routing pattern using `express.Router()`.
