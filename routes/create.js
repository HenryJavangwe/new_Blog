const express = require('express');
const router = express.Router();
const Article = require('../models/article')

// Grabbing the create new article page

router.get('/', function(req, res, next) {
    res.render('create', {article: new Article()});
})

//whenever we submit the form it'll call this router.post which is at this '/' 
//this is an async function so we tell use the keywords async and then await and this will save our new article.
router.post('/', async function(req, res) {
    let article = new Article({
        //access the form fields using the req.body.params -- this is made possible when we tell the --> app.use(express.urlencoded({ extended: false })).
        title: req.body.title,
        author: req.body.author,
        body: req.body.body,
        image: req.body.image,
        createdAt: req.body.createdAt
    })
    //this will try to save the article, if the article saves, it'll update the article variable--> article = await article.save() and teh redirect to that new article page.
    try {
        article = await article.save();
        console.log('successfully created', article.id);
        res.redirect(`/view/${article.id}`)
    } catch (error) {
        console.log(error)
        res.render('create', {article : article})
    }
  })

  router.delete('/:id', async (req, res)=>{
      await Article.findByIdAndDelete(req.params.id)
      res.redirect('/')
  })
    
// To be able to get a hold of this route out side this module, export it like below.
module.exports = router;