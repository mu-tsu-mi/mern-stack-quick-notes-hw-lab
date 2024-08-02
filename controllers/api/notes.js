const Note = require('../../models/note');

module.exports = {
    index,
    addNote,
    deleteNote
}

async function index(req, res) {
    const notes = await Note.find({ user: req.user._id }).exec();
    res.json(notes);
}

async function addNote(req, res) {
    const note = req.body
    note.user = req.user
    
    const createdNote = await Note.create(note)
    res.json(createdNote)
}

async function deleteNote(req, res) {
    await Note.deleteOne({_id: req.params.id})
    const notes = await Note.find({ user: req.user._id }).exec();
    res.json(notes)
}