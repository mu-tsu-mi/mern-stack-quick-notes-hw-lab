import './editNote.css';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import * as notesAPI from '../../utilities/notes-api';

export default function EditNote() {
    const {noteId} = useParams()
    const [note, setNote] = useState({});
  
  useEffect(()=> {
    async function getNote() {
      const note = await notesAPI.getNote(noteId)
      setNote(note)
    }
    getNote()
  }, [noteId])

    return (<form className='editForm'>
            <label>note</label>
            <input value={note.text}></input>
            </form>
    )
}
