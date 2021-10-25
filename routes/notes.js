// Required
const notes = require("express").Router();
const {
  deleteNote,
  readFromFile,
  writeToFile,
  readAndAppend,
} = require("../helpers/fsutil");

// Route for retrieving notes

notes.get("/", (req, res) => {
  readFromFile("./db/db.json").then((data) => res.json(JSON.parse(data)));
});

// Route for posting notes

notes.post("/", (req, res) => {
  const { id, title, text } = req.body;

  if (req.body) {
    const newID = "1"  
    const newNote = {
      id: newID,
      title,
      text,
    };
    readAndAppend(newNote, "./db/db.json");
    res.json(`New note created!`);
    //   console.log(newNote);
  } else {
    res.error(`Failed to create note!`);
  }
});

// Exporting Notes
module.exports = notes;