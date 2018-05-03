const imports = require("../../modules/notesCollection");
const assert = require("../testLibrary");
console.log(assert);
assert.evaluation.isTrue(5 === 5);

function sampleTest () {
  let five = 5;
  assert.isTrue(five === 5);
}

function checkInit () {
  let notes = new imports.notesConstructor();
  assert.isTrue(notes.allNotes().length === 0);
}

function addNewNote() {  
  let notes = new imports.notesConstructor();
  notes.newNote("TEST");
  assert.isTrue(notes.allNotes().length === 1);
  assert.isTrue(notes.showNote(0) === "TEST");
}

function viewNotes() {
  let notes = new imports.notesConstructor();
  notes.newNote('very very very long texttttttt').newNote('another veeeeeeeryyyyyyyyyy long note').newNote('one two three four five six seven eight').newNote('x');
  let notesCollections = [ 'very very very long ','another veeeeeeeryyy','one two three four f','x' ];
  assert.isTrue(notes.allNotes().join('') === notesCollections.join(''));
}

function showNote() {
  let notes = new imports.notesConstructor();
  notes.newNote('very very very long texttttttt').newNote('another veeeeeeeryyyyyyyyyy long note').newNote('one two three four five six seven eight').newNote('x');
  assert.isTrue(notes.showNote(2) === 'one two three four five six seven eight');
}

sampleTest();
checkInit();
addNewNote();
viewNotes();
showNote();
