const express = require('express');
const router = express.Router();
const notesCtrl = require('../../controllers/api/notes');

// GET /api/notes
router.get('/', notesCtrl.index);
// POST /api/notes
router.post('/', notesCtrl.addNote);
// DELETE /api/notes
router.delete('/:id', notesCtrl.deleteNote)
// GET /api/notes/:id
router.get('/:id', notesCtrl.showNote);
// PUT /api/notes/:id
router.put('/:id', notesCtrl.updateNote);

module.exports = router;