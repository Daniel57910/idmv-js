(function(exports) {
  
   exports.notesCollection = function() {
    let notes = [];
    
    this.newNote = function(text) {
      notes.push(text);
      return this;
    };
    
    this.allNotes = function() {
      return notes.map(notes => notes.slice(0,20));
    };
    
    this.showNote = function(index) {
      return notes[index];
    };
    
};

})(this);
