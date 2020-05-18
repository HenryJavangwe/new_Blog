var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  const articles = [{
    title:'Article1',
    author:'Baki',
    body:'This is the article body',
    image: 'https://images.unsplash.com/photo-1553524787-74454297efc2?ixlib=rb-1.2.1&auto=format&fit=crop&w=1191&q=80',
    default: new Date()
  }]
  res.render('index', { articles: articles });
});

module.exports = router;
