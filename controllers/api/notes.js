const Note = require('../../models/note');

module.exports = {
    index,
    addNote
}

async function index(req, res) {
    const notes = await Note.find({ user: req.user._id }).exec();
    res.json(notes);
}

async function addNote(req, res) {
    const note = req.body
    note.user = req.user
    
    await Note.create(note)
    res.json(note)
}