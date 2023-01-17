const db = require('../db');

module.exports = {
  post(req, callback) {
    const username = 'Jake';
    const {
      title, description, flashcards,
    } = req.body;
    const { terms, definitions } = flashcards.reduce(
      (acc, flashcard) => {
        acc.terms.push(flashcard.term);
        acc.definitions.push(flashcard.definition);
        return acc;
      },
      { terms: [], definitions: [] },
    );

    const queryDeckStirng = `
      INSERT INTO decks(username, title, description)
      VALUES ($1, $2, $3)
      RETURNING deck_id`;
    const queryDeckArgs = [username, title, description];
    db
      .query(queryDeckStirng, queryDeckArgs)
      .then((results) => {
        const { deck_id } = results.rows[0];
        const queryFlashcardString = `INSERT INTO flashcards(deck_id, term, definition)
          VALUES ($1, unnest(ARRAY['${terms.join("','")}']), unnest(ARRAY['${definitions.join("','")}']))`;
        const queryFlashcardArgs = [deck_id];
        db
          .query(queryFlashcardString, queryFlashcardArgs)
          .catch((err) => callback(err));
      })
      .then((result) => callback(null, result))
      .catch((err) => callback(err));
  },
  getCards(username, callback) {
    const queryStr = `SELECT * FROM decks WHERE username='Jake'`;
    db
      .query(queryStr, (err, results) => {
        callback(err, results);
      });
  },
  getFlashcards(id, callback) {
    const queryStr = `SELECT * FROM flashcards WHERE deck_id=${id}`;
    db
      .query(queryStr, (err, results) => {
        callback(err, results);
      });
  },
  delete(id, callback) {
    const queryStr = ` DELETE FROM decks
    USING flashcards
    WHERE decks.deck_id = flashcards.deck_id
    AND decks.deck_id = ${id};`;
    db
      .query(queryStr, (err, results) => {
        callback(err, results);
      });
  },
  edit(req, callback) {
    console.log('reqqqqq', req);
    const queryStr = `UPDATE flashcards SET term='${req.term}', definition='${req.definition}' WHERE id=${req.id.id}`;
    db
      .query(queryStr, (err, results) => {
        callback(err, results);
      });
  },
};
