var notes = window.notesCollection;
window.onload = function () {
  addNewNote();
};


function addNewNote() {
  document.getElementById('noteButton').addEventListener('click', function () {
    console.log("hello");
    let enteredNote = document.getElementById('noteArea').value;
    notes.newNote(enteredNote);
    showAllNotes();
  });
}

function showAllNotes() {
  index = 0;
  let allNotes = notes.allNotes();
  document.getElementById('all_notes').innerHTML = allNotes.map((note) => 
  "<li id = " + index++ + ' onclick="viewNote(this)">' + note + '</li>').join('');
}

function viewNote(item) {
  document.getElementById('selectedNote').innerHTML = notes.showNote(item.id);
}

//research event.preventDefault
//review JS DOM insertion.
//build a browser/dom, build a bubble.
//take structured docs, turn into tree then traverse tree.
