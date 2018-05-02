var notes = window.notesCollection;
window.onload = function () {
  addNewNote();

};


function addNewNote() {
  document.getElementById('noteButton').addEventListener('click', function () {
    let enteredNote = document.getElementById('noteArea').value;
    notes.newNote(enteredNote);
    showAllNotes();
  });
}

function showAllNotes() {
  let allNotes = notes.allNotes();
  allNotes = allNotes.join("<br>");
  console.log(allNotes);
  document.getElementById('all_notes').innerHTML = allNotes;
}