const notes = [
  { 
    title: "first note", 
    noteBody: "this is an example note",
    id: 1 
  }
]
//Add Note Area
const add_note_btn = document.querySelector('.icons')
const note_area = document.querySelector('.write-note-area')

const add_note = `
<div class="text-div">
<label for="note">NOTE:</label>
<textarea id="note-box" name="note" rows="20" cols="80" placeholder="Your Note Here..."></textarea>
    <button id="save-button" type="button">
        Save
    </button>
    <button id="delete-button" type="button">
        Cancel
    </button>
`

function addNote() {
  note_area.insertAdjacentHTML("afterbegin", add_note)
  add_note_btn.removeEventListener('click',addNote)
}

add_note_btn.addEventListener('click', addNote)