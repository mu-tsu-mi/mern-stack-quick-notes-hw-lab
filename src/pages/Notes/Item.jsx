import './item.css';
import { Link } from 'react-router-dom';

export default function Item({note, handleDeleteNote, handleEditNote}) {
    function handleDelete(e) {
        e.preventDefault();
        handleDeleteNote(note._id)
    }

    return (
        <div className='item'>
            <span>{note.text}</span>
            <span><Link to={`/notes/${note._id}`}>Edit</Link></span>
            <span>{note.createdAt.toLocaleString('en-AU')}</span>
            <span><button type='submit' onClick={handleDelete}>Delete</button></span>
        </div>
    )
}