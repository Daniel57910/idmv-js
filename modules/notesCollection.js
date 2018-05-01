function notesCollection() {
  this._notes = [];
}

notesCollection.prototype.newNote = function(text) {
  this._notes.push(text);
  return this;
};

notesCollection.prototype.allNotes = function() {
   return this._notes.map(notes => notes.slice(0,20));
};

let notes = new notesCollection();
console.log(notes);


console.log(notes.newNote("123456"));
console.log(notes);

module.exports = notesCollection = new notesCollection();


