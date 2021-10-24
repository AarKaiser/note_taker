// Requiring Express & Path

const express = require('express');
const path = require('path');

// Declaring App
const app = express();

// Declaring port and alternate
const PORT = process.env.PORT || 3001;

// Requiring Routes

const api = require('./routes/index.js');

// Middleware

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use('/api', api);

// Route for index page
app.get('/', (req, res)=>
    res.sendFile(path.join(__dirname, '/public/index.html'))
);

// Route for notes page

app.get('/notes', (req, res) =>
    res.sendFile(path.join(__dirname, '/public/notes.html'))
);

// Route for wildcard/error/404 page

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/404.html' ))
})

// Listening on Port

app.listen(PORT, ()=>
console.log(`Listening on http://localhost:${PORT} 🚀`)
);

// GIVEN a note-taking application 
// WHEN I open the Note Taker 
// THEN I am presented with a landing page with a link to a notes page ✔️
// WHEN I click on the link to the notes page
// THEN I am presented with a page with existing notes listed in the left-hand column, plus empty fields to enter a new note title and the note’s text in the right-hand column
// WHEN I enter a new note title and the note’s text
// THEN a Save icon appears in the navigation at the top of the page
// WHEN I click on the Save icon
// THEN the new note I have entered is saved and appears in the left-hand column with the other existing notes
// WHEN I click on an existing note in the list in the left-hand column
// THEN that note appears in the right-hand column
// WHEN I click on the Write icon in the navigation at the top of the page
// THEN I am presented with empty fields to enter a new note title and the note’s text in the right-hand column
