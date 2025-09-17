const express = require('express');
const swaggerUi = require('swagger-ui-express');
const swaggerJsdoc = require('swagger-jsdoc');

const app = express();

// Your API routes
const usersRouter = require('./routes/users');
app.use('/api/users', usersRouter);

// Swagger config
const swaggerOptions = {
  definition: {
    openapi: "3.0.3",
    info: {
      title: "My API",
      version: "1.0.0",
      description: "REST API docs",
    },
    servers: [{ url: "http://localhost:3000/api" }],
  },
  apis: ["./routes/*.js"], // JSDoc annotations in route files
};

const swaggerSpec = swaggerJsdoc(swaggerOptions);

// Serve Swagger docs at /api-docs
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

// Start server
app.listen(3000, () => {
  console.log("Server running at http://localhost:3000/api-docs");
});
