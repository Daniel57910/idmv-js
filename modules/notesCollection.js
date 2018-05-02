(function(exports) {
  const notes = [];
  
  exports.newNote = function(text) {
    notes.push(text);
  }
  
  exports.allNotes = function() {
    return notes.map(notes => notes.slice(0,20));
  }
  
  exports.showNote = function(index) {
    return notes[index];
  }
})(this);
