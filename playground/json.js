// var obj = {
//     name: 'Zakir'
// };
// var stringObj = JSON.stringify(obj);
// console.log(typeof stringObj);
// console.log(stringObj);

// var personString = '{"name": "Zakir", "age": 27}';
// var person = JSON.parse(personString);
// console.log(typeof person);
// console.log(person);

const fs = require('fs');

var originalNote = {
    title: 'Some title',
    body: 'Some body'
};
originalNoteString = JSON.stringify(originalNote);
fs.writeFileSync('notes_test.json', originalNoteString);

var noteString = fs.readFileSync('notes_test.json');
var note = JSON.parse(noteString);
console.log(typeof note);
console.log(note.title);