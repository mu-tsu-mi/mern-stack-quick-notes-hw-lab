import './item.css';
// 

export default function Item({note, handleDeleteNote}) {
    function handleDelete(e) {
        e.preventDefault();
        // noteId..?
        handleDeleteNote(note._id)
    }
    return (
        <div className='item'>
            <span>{note.text}</span>
            <span>{note.createdAt.toLocaleString('en-AU')}</span>
            <span><button type='submit' onClick={handleDelete}>Delete</button></span>
        </div>
    )
}