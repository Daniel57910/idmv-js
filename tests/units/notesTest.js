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
  assert.isTrue(notesCollection.allNotes().length === 0);
}

function addNewNote() {
  notesCollection.reset();
  
  notesCollection.newNote("TEST");
  assert.isTrue(notesCollection.allNotes().length === 1);
  assert.isTrue(notesCollection.showNote(0) === "TEST");
}

function viewNotes() {
  notesCollection.reset();
  notesCollection.newNote('very very very long texttttttt').newNote('another veeeeeeeryyyyyyyyyy long note').newNote('one two three four five six seven eight').newNote('x');
  let notesCollections = [ 'very very very long ','another veeeeeeeryyy','one two three four f','x' ];
  assert.isTrue(notesCollection.allNotes().join('') === notesCollections.join(''));
}

function showNote() {
  notesCollection.reset();
  notesCollection.newNote('very very very long texttttttt').newNote('another veeeeeeeryyyyyyyyyy long note').newNote('one two three four five six seven eight').newNote('x');
  assert.isTrue(notesCollection.showNote(2) === 'one two three four five six seven eight');
}

sampleTest();
checkInit();
addNewNote();
viewNotes();
showNote();
