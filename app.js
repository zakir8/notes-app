// could use var but we are not changing libraries so const works better here.
const fs = require('fs');
const os = require('os');
const _ = require('lodash');
const yargs = require('yargs');

const notes = require('./notes.js')

const argv = yargs.argv
console.log(argv);
var command = argv._[0]
// console.log(process.argv);
// console.log('Command: ', command);
// console.log('Yargs', argv);

if (command === 'add') {
    var note = notes.addNote(argv.title, argv.body);
    if(note) {
        console.log("Note created");
        notes.logNote(note);
    } else {
        console.log("There is a duplicate title. Try a new title.");
    }

} else if (command === 'list') {
    var allNotes = notes.getAll();
    // for(i = 0; i < notes.length; i++) { 
    //     console.log("Title: " + notes[i].title + " Body: " + notes[i].body); 
    // }
    // return notes

    console.log(`Printing ${allNotes.length} notes(s).`);
    allNotes.forEach((note) => {
        notes.logNote(note);
    });
    

} else if (command === 'read') {
    var note = notes.getNote(argv.title);
    if (note) {
        console.log("Note found!");
        // console.log(note);
        notes.logNote(note);
    } else {
        console.log("No title found in notes");
    }

} else if (command === 'remove') {
    var noteRemoved = notes.removeNote(argv.title);
    var message = noteRemoved ? 'Note was removed' : 'Note not found'
    console.log(message);

} else {
    console.log('Command not recognized');
}

// Some practice
// console.log(_.isString(true));
// console.log(_.isString('Zakir'));

// var array = [5,6,8,4,5,8,0,3,8]
// removes duplicates
// console.log(_.uniq(array));

// var res = notes.addNote();
// console.log(res);

// var add = notes.add(9,-2);
// console.log(add);

// var user = os.userInfo();
// console.log(user);

// option 1 - with callback function. Makes it asynchronous
// fs.appendFile('greetings.txt', `Hello ${user.username}! You are ${notes.age}.`, function(err) { 
// 	if (err) {
// 		console.log('Unable to write to file');
// 	}
// });

//option 2 - Synchronous
// fs.appendFileSync('greetings.txt', 'Hello World!');