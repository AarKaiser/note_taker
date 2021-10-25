// The majority of the utility file was copied from this week's MiniProject (Module 11, Activity 28)!!!

const fs = require("fs");
const util = require("util");

const readFromFile = util.promisify(fs.readFile);

const writeToFile = (destination, content) =>
  fs.writeFile(destination, JSON.stringify(content, null, 4), (err) =>
    err ? console.error(err) : console.info(`\nData written to ${destination}`)
  );

const readAndAppend = (content, file) => {
  fs.readFile(file, "utf8", (err, data) => {
    if (err) {
      console.error(err);
    } else {
      const parsedData = JSON.parse(data);
      parsedData.push(content);
      writeToFile(file, parsedData);
    }
  });
};

// Delete entries

const deleteNote = (toDelete, file) => {
  fs.readFile(file, "utf8", (err, data) => {
    if (err) {
      console.error(err);
    } else {
      const parsedData = JSON.parse(data);
      console.log(parsedData)
      filteredDB = parsedData.filter(item => item.id !== toDelete);
      writeToFile(file, filteredDB);
      return filteredDB;
    }
  });
};

module.exports = { deleteNote, readFromFile, writeToFile, readAndAppend };
