import { useState, useEffect } from 'react';
import NoteList from './NoteList';
import NewNoteForm from './NewNoteForm';
import * as notesAPI from '../../utilities/notes-api';

export default function Notes() {
  const [notes, setNotes] = useState([]);
  
  useEffect(()=> {
    async function getNotes() {
      const notes = await notesAPI.getAll()
      setNotes(notes)
    }
    getNotes()
  }, [])

  async function addNote(newNote) {
    const note = await notesAPI.createNote(newNote)

    // to show all note items
    // const notes = await notesAPI.getAll()
    // setNotes(notes)

    // refactor
    setNotes(previousNotes =>  [...previousNotes, note])
  }

  async function handleDeleteNote(id) {
    const note = await notesAPI.deleteNote(id)
    setNotes(note)
  }

  return (
      <>
        <h1>Notes</h1>
        <NewNoteForm addNote={addNote} />
        <NoteList notes={notes} handleDeleteNote={handleDeleteNote} />
      </>
    );
  }