const express = require('express');
const router = express.Router();

// Grabbing the create new article page

router.get('/', function(req, res, next) {
    res.render('new');
})

// To be able to get a hold of this route out side this module, export it like below.
module.exports = router;