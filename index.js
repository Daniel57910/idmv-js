var notes = window.notesCollection;
window.onload = function() {
  document.getElementById('noteButton').addEventListener('click', function() {
  for(let i in notes) { console.log(i, notes.i); };
  notes.newNote('alpha');
  console.log(notes.allNotes());
  });
};
