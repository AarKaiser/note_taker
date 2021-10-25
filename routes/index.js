// Required
const express = require("express");
const notesRouter = require("./notes");

// Declaring App
const app = express();

// Middleware
app.use("/notes", notesRouter);

// Exporting app
module.exports = app;
