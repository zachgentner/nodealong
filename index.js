// const person = require("./person");
// const path = require("path");
// const fs = require("fs");
// const os = require("os");

// console.log(person.person.name);
// console.log(person.persona.name);

// // fs.writeFile
// // fs.appendFile

// //Reads File
// fs.readFile(path.join(__dirname, "test.txt"), "utf8", (err, data) => {
//     if (err) throw err;
//     console.log(data);
// });

const Logger = require("./logger");

const logger = new Logger();

logger.on("message", (data) => console.log("Called Listener:", data));

logger.log("Hello World");
logger.log("Hello World");
