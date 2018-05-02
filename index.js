let notes = window.notesCollection();
console.log(notes);

document.getElementById('noteButton').onclick = function () {
  let test = document.getElementById('noteArea').value;
  console.log(notes);
}
