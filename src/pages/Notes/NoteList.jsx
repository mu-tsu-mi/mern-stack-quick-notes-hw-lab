import Item from './Item';

export default function NoteList({notes, handleDeleteNote}) {
    
    return (
        notes.length === 0 ? "No notes yet" : 
        <div>
            <div>{notes.map((note, idx)=><Item note={note} handleDeleteNote={handleDeleteNote} key={idx} />)}</div>
        </div>
    )
}