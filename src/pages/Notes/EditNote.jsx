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

    async function handleUpdate(e) {
        e.preventDefault();
        await notesAPI.updateNote(noteId, note.text)
    }

    return (
            <form className='editForm'>
                <label>note</label>
                <input value={note.text} onChange={(e)=> { setNote({...note, text: e.target.value}) }}></input>
                <span><button type='submit' onClick={handleUpdate}>Update</button></span>
            </form>
    )
}
