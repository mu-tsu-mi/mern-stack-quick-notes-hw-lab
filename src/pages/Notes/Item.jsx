import './item.css';

export default function Item({note}) {
    return (
        <div className='item'>
            <span>{note.text}</span>
            <span>{note.createdAt.toLocaleString('en-AU')}</span>
        </div>
    )
}