(function(exports) {
  let notes = [];
  
  exports.newNote = function(text) {
    notes.push(text);
    return this;
  }
  
  exports.allNotes = function() {
    return notes.map(notes => notes.slice(0,20));
  }
  
  exports.showNote = function(index) {
    return notes[index];
  }

  exports.reset = function() {
    notes = [];
    return this;
  }
})(this);
