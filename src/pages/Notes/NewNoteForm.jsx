import { useState } from 'react';

export default function NewNoteForm({addNote}) {
    const [newNote, setNewNote] = useState('')

    async function handleAddNote(e) {
        e.preventDefault()
        // addNote func is async so this is also async
        await addNote(newNote)
        setNewNote('')
    }
    
    return (
        <>
            <h3>Enter a new note here</h3>
            <form onSubmit={handleAddNote}>
                <input value={newNote} onChange={(e)=> { setNewNote(e.target.value) }} ></input>
                <button type="submit">Add a new note</button>
            </form>
        </>
    )
}