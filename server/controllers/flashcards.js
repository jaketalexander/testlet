const models = require('../models');

module.exports = {
  getCards(req, res) {
    models.flashcards.getCards(req.query.username, (err, results) => {
      if (err) {
        console.error('Unable to retrieve cards from the database: ', err);
        res.sendStatus(500);
      } else {
        res.status(200).send(results);
      }
    });
  },
  getFlashcards(req, res) {
    models.flashcards.getFlashcards(req.query.id, (err, results) => {
      if (err) {
        console.error('Unable to retrieve from the database: ', err);
        res.sendStatus(500);
      } else {
        res.status(200).send(results);
      }
    });
  },
  post(req, res) {
    models.flashcards.post(req, (err, results) => {
      if (err) {
        console.error('Unable to post. Please try again: ', err);
        res.sendStatus(500);
      } else {
        res.status(201).send(results);
      }
    });
  },
  delete(req, res) {
    models.flashcards.delete(req.body.id, (err, results) => {
      if (err) {
        console.error('Unable to delete: ', err);
        res.sendStatus(500);
      } else {
        console.log(results);
        res.sendStatus(204);
      }
    });
  },
  editCards(req, res) {
    const obj = { ...req.body, id: req.params };
    models.flashcards.edit(obj, (err, results) => {
      if (err) {
        console.error('Unable to edit: ', err);
        res.sendStatus(500);
      } else {
        console.log(results);
        res.sendStatus(204);
      }
    });
  },
};
