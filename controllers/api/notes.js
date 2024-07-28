const Note = require('../../models/note');

module.exports = {
    index
}

async function index(req, res) {
    const notes = await Note.find({}).exec();
    // console.log('note list: ', notes)
    res.json(notes);
}