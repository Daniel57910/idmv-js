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
  testNote.newNote("TEST");
  assert.isTrue(notesCollection._notes.length === 1);
  assert.isTrue(notesCollection._notes[0] === "TEST");
}

sampleTest();
checkInit();
addNewNote();