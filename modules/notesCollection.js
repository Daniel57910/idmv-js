function notesCollection() {
  this._notes = [];
}

notesCollection.prototype.reset = function() {
  this._notes = [];
  return this;
};

notesCollection.prototype.newNote = function(text) {
  this._notes.push(text);
  return this;
};

notesCollection.prototype.allNotes = function() {
   return this._notes.map(notes => notes.slice(0,20));
};

notesCollection.prototype.showNote = function(index) {
  return this._notes[index];
}

note = new notesCollection();
note.newNote("abcdefgh");
note.newNote("axbcdkwlcwcoiw");
console.log(note.showNote(0));

module.exports = notesCollection = new notesCollection();


