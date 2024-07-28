import Item from './Item';

export default function NoteList({notes}) {
    
    return (
        notes.length === 0 ? "No notes yet" : 
        <div>
            <div>{notes.map((note, idx)=><Item note={note} key={idx} />)}</div>
        </div>
    )
}