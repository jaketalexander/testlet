const router = require('express').Router();
const controller = require('./controllers');

router.post('/flashcards', controller.flashcards.post);

router.get('/cards', controller.flashcards.getCards);

router.get('/flashcards', controller.flashcards.getFlashcards);

router.delete('/flashcards', controller.flashcards.delete);

router.patch('/cards/:id', controller.flashcards.editCards);

module.exports = router;
