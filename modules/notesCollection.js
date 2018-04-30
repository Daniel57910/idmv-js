function notesCollection() {
  this._notes = [];
}

notesCollection.prototype.newNote = function(text) {
  this._notes.push(text);
  return this;
};



module.exports = notesCollection = new notesCollection();
