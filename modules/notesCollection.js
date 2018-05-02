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

<<<<<<< HEAD
notesCollection.prototype.showNote = function(index) {
  return this._notes[index];
}
 
note = new notesCollection();
note.newNote("abcdefgh");
note.newNote("axbcdkwlcwcoiw");
console.log(note.showNote(0));

=======
>>>>>>> fa82c8d94908106246bd6061f526041d5b97212c
module.exports = notesCollection = new notesCollection();


