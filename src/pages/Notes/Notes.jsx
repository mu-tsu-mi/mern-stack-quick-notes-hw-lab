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

  return (
      <>
        <h1>Notes</h1>
        <NoteList notes={notes} />
        <NewNoteForm />
      </>
    );
  }

  // ADD MyNotes component and import it