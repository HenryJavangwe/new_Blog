const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  const articles = [{
    title:'Article1',
    author:'Baki',
    body:'This is the article body',
    image: 'https://images.unsplash.com/photo-1553524787-74454297efc2?ixlib=rb-1.2.1&auto=format&fit=crop&w=1191&q=80',
    createdAt: new Date()
  },
  {
    title:'Article 2',
    author:'Baki Sparks',
    body:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    image: 'https://images.unsplash.com/photo-1552561040-3ff08bed3eba?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
    createdAt: new Date()
  }]
  res.render('index', { articles: articles });
});

module.exports = router;
