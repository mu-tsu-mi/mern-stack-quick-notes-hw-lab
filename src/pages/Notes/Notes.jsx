import { useState, useEffect } from 'react';
import NoteList from './NoteList';
import NewNoteForm from './NewNoteForm';
import * as notesAPI from '../../utilities/notes-api';

export default function Notes() {
  const [notes, setNotes] = useState([]);
  async function getNotes() {
    const notes = await notesAPI.getAll()
    setNotes(notes)
  }
  useEffect(()=> {
    getNotes()
  }, [])

  async function addNote(newNote) {
    const note = await notesAPI.createNote(newNote)
    await getNotes()

    // to show all note items
    // const notes = await notesAPI.getAll()
    // setNotes(notes)
  } 

  return (
      <>
        <h1>Notes</h1>
        <NewNoteForm addNote={addNote} />
        <NoteList notes={notes} />
      </>
    );
  }