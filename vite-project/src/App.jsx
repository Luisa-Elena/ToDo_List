import React from "react"
import Note from "./Note"

export default function App() {

  const [notes, setNotes] = React.useState(JSON.parse(localStorage.getItem("notes")) || [])
  const [newNote, setNewNote] = React.useState("")
  const [noteId, setNoteId] = React.useState(0)
  const [search, setSearch] = React.useState("")

  function createNewNote(event) {
    setNewNote({
      id: noteId,
      text: event.target.value
    })
  }

  function addNote() {
    setNotes(prev => {
      return [...prev, newNote]
    })
    setNoteId(prev => prev+1)
    setNewNote({id: noteId, text: ""})
  }

  React.useEffect(() => {
    localStorage.setItem("notes",JSON.stringify(notes))
  }, [notes])

  const notesElements = notes.filter(note => (note.text).toLowerCase().includes(search.toLowerCase())).map(note => {
    return <Note
      key={note.id}
      text={note.text}
      deleteNote={() => deleteNote(note.id)}
    />
  })

  function deleteNote(id) {
    setNotes(prev => prev.filter(note => note.id !== id))
  }

  function searchNotes(event) {
    setSearch(event.target.value)
  }

  return (
    <div className="frame">
    <div className="main-container">
      <h1 className="title">Add your notes here</h1>
      <div className="main_input">
        <input className="input"
          type="text"
          onChange={createNewNote}
          placeholder="Type your note here"
          value={newNote.text}
        />
        {/* <button onClick={addNote}>Add</button> */}
        <button class="button" onClick={addNote}>
          Add note
          <div class="hoverEffect">
          <div>
          </div>
          </div></button>
      </div>
      <div className="search_container">
        <input className="search_input"
          type="text"
          onChange={searchNotes}
          placeholder="Search notes"
          value={search}
        />
        <i class="gg-close-o" onClick={() => setSearch("")}></i>
      </div>
      {notesElements}
    </div>
    </div>
  )
}