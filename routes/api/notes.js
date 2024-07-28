const express = require('express');
const router = express.Router();
const notesCtrl = require('../../controllers/api/notes');

// GET /api/notes
router.get('/', notesCtrl.index);
// POST /api/notes
router.post('/',notesCtrl.addNote);
// GET /api/notes/:id
// router.get('/:id', notesCtrl.show);

module.exports = router;