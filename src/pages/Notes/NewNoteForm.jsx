import { useState } from 'react';

export default function NewNoteForm({addNote}) {
    const [newNote, setNewNote] = useState('')

    function handleAddNote(e) {
        e.preventDefault()
        addNote(newNote)

    }
    
    return (
        <>
            <h1>NewNoteForm</h1>
            <form onSubmit={handleAddNote}>
                <input value={newNote} onChange={(e)=> { setNewNote(e.target.value) }} ></input>
                <button type="submit">Add a new note</button>
            </form>
        </>
    )
}