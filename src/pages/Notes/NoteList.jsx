import Item from './Item';

export default function NoteList({notes}) {
    return (
        <div>
            <p>{notes.map((note, idx)=><Item note={note} key={idx} />)}</p>
        </div>
    )
}
/* No Notes Yet */