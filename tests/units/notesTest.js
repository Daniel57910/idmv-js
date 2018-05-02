const imports = require("../../modules/notesCollection");

const Assert = function () {};

Assert.prototype.isTrue = function (assertionToCheck) {
  if (!assertionToCheck) {
    throw new Error("Assertion failed: " + assertionToCheck + " is not truthy");
  }
  else {
    console.log("SUCCESS!");
  }
};

const assert = new Assert();

function sampleTest () {
  let five = 5;
  assert.isTrue(five === 5);
}

function checkInit () {
  let notes = new imports.notesCollection();
  assert.isTrue(notes.allNotes().length === 0);
}

function addNewNote() {  
  let notes = new imports.notesCollection();
  notes.newNote("TEST");
  assert.isTrue(notes.allNotes().length === 1);
  assert.isTrue(notes.showNote(0) === "TEST");
}

function viewNotes() {
  let notes = new imports.notesCollection();
  notes.newNote('very very very long texttttttt').newNote('another veeeeeeeryyyyyyyyyy long note').newNote('one two three four five six seven eight').newNote('x');
  let notesCollections = [ 'very very very long ','another veeeeeeeryyy','one two three four f','x' ];
  assert.isTrue(notes.allNotes().join('') === notesCollections.join(''));
}

function showNote() {
  let notes = new imports.notesCollection();
  notes.newNote('very very very long texttttttt').newNote('another veeeeeeeryyyyyyyyyy long note').newNote('one two three four five six seven eight').newNote('x');
  assert.isTrue(notes.showNote(2) === 'one two three four five six seven eight');
}

sampleTest();
checkInit();
addNewNote();
viewNotes();
showNote();
