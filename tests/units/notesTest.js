const notesCollection = require("../../modules/notesCollection");

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
  assert.isTrue(notesCollection._notes.length === 0);
}

function addNewNote() {
  let testNote = notesCollection;
  testNote.reset();
  testNote.newNote("TEST");
  assert.isTrue(notesCollection._notes.length === 1);
  assert.isTrue(notesCollection._notes[0] === "TEST");
}

function viewNotes() {
  const testNote = notesCollection;
  testNote.reset();
  testNote.newNote('very very very long texttttttt').newNote('another veeeeeeeryyyyyyyyyy long note').newNote('one two three four five six seven eight').newNote('x');
  let testNotes = [ 'very very very long ','another veeeeeeeryyy','one two three four f','x' ];
  assert.isTrue(testNote.allNotes().join('') === testNotes.join(''));
}

function showNote() {
  const testNote = notesCollection;
  testNote.reset();
  testNote.newNote('very very very long texttttttt').newNote('another veeeeeeeryyyyyyyyyy long note').newNote('one two three four five six seven eight').newNote('x');
  testNote.showNote(2) === 'one two three four five six seven eight';
  assert.isTrue(testNote.showNote(2) === 'one two three four five six seven eight');
}

sampleTest();
checkInit();
addNewNote();
viewNotes();
showNote();
