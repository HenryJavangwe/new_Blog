const express = require('express');
const router = express.Router();

// Grabbing the create new article page

router.get('/', function(req, res, next) {
    let data = {
        title: 'Add Pokemon',
        message: false
    }
    res.render('new', data);
})

// To be able to get a hold of this route out side this module, export it like below.
module.exports = router;