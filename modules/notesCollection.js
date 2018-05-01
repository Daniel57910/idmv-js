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

module.exports = notesCollection = new notesCollection();


