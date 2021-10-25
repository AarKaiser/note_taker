// Required
const notes = require('express').Router();
const { deleteNote, readFromFile, writeToFile, readAndAppend } = require('../helpers/fsutil');


// Route for retrieving all notes

notes.get("/", (req, res) => {
    readFromFile("./db/db.json").then((data) => res.json(JSON.parse(data)))
});




// Exporting Notes
 module.exports = notes;