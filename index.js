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
  console.log(allNotes);
  document.getElementById('all_notes').innerHTML = allNotes.map((note) => 
  "<li id = " + index++ + '>' + note + '</li>');
}

//research event.preventDefault
//review JS DOM insertion.
//build a browser/dom, build a bubble.
//take structured docs, turn into tree then traverse tree.