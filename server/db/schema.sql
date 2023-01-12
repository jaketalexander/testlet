DROP TABLE IF EXISTS decks CASCADE;
DROP TABLE IF EXISTS flashcards;

CREATE TABLE decks (
  deck_id SERIAL PRIMARY KEY,
  username VARCHAR(50),
  title VARCHAR(50),
  "description" VARCHAR(200)
);

CREATE TABLE flashcards (
  id SERIAL PRIMARY KEY,
  deck_id INT REFERENCES decks(deck_id) ON DELETE CASCADE,
  term VARCHAR(50),
  "definition" VARCHAR(200)
);