const express = require('express');
const index = express.Router();

index.get('/', (req, res) => {
    try {
      if (req.session.auth || null) {
        res.render("index", { auth: true, username: req.session.username });
      } else {
          res.redirect('/');
        };
      } catch (err) {
    res.status(500).send({ message: err.message });
  }
});

module.exports = index;