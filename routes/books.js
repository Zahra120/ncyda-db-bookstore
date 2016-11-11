const express = require('express'),
      router = express.Router(),
      db = require('../models');

router.get('/', (request, response) => {
  db.Book.findAll({ order: 'id ASC' }).then((books) => {
    response.render('books/index', { books: books });
  });
});

router.get('/new', (request, response) => {
  response.render('books/new');
});

router.get('/:id', (request, response) => {
  db.Book.findById(request.params.id).then((book) => {
    response.render('books/show', { book: book });
  });
});

router.get('/:id/edit', (request, response) => {
  db.Book.findById(request.params.id).then((book) => {
    response.render('books/edit', { book: book });
  });
});

router.post('/', (request, response) => {
  if (request.body.title) {
    db.Book.create(request.body).then(() => {
      response.redirect('/books');
    });
  } else {
    response.redirect('/books/new');
  }
});

router.put('/:id', (request, response) => {
  db.Book.update(request.body, {
    where: {
      id: request.params.id
    }
  }).then(() => {
    response.redirect('/books/' + request.params.id);
  });
});

router.delete('/:id', (request, response) => {
  db.Book.destroy({
    where: {
      id: request.params.id
    }
  }).then(() => {
    response.redirect('/books');
  });
});

module.exports = router;
