function notesCollection() {
  this._notes = [];
  this._shortNotes = [];
}

notesCollection.prototype.newNote = function(text) {
  this._notes.push(text);
  return this;
};

notesCollection.prototype.allNotes = function() {
  this._shortNotes = this._notes.map(notes => notes.slice(0,20));
  return this;
};

module.exports = notesCollection = new notesCollection();


