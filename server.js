// Requiring Express & Path
const express = require("express");
const path = require("path");

// Declaring App
const app = express();

// Declaring port and alternate
const PORT = process.env.PORT || 3003;

// Requiring Routes
const api = require("./routes/index.js");

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use("/api", api);

// Route for index page
app.get("/", (req, res) =>
  res.sendFile(path.join(__dirname, "/public/index.html"))
);

// Route for notes page
app.get("/notes", (req, res) =>
  res.sendFile(path.join(__dirname, "/public/notes.html"))
);

// Route for wildcard/error/404 page
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "/public/404.html"));
});

// Listening on Port
app.listen(PORT, () => console.log(`Listening on http://localhost:${PORT} 🚀`));