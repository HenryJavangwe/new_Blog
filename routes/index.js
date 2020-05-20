const express = require('express');
const router = express.Router();
const Article = require('../models/article')

/* GET home page. */
router.get('/', async function(req, res, next) {
  const articles = await Article.find().sort({
    createdAt: 'desc' //used .sort() function to sort the articles in descending order so that the latest articles will appear at the top and the oldest at the bottom.
  }); // This will grab all our articles from the database -> it's an async function

  res.render('index', { articles: articles });
});

module.exports = router;
