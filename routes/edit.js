const express = require('express');
const router = express.Router();
const Article = require('../models/article')

router.get('/:id', async(req, res)=>{
    const article = await Article.findById(req.params.id)
    res.render('edit', {article: article} )
})

router.put('/:id', async (req, res, next)=>{
    req.article = await Article.findById(req.params.id)
    next()
}, save('edit'))

function save (edit){
    return async(req, res)=>{
        let article = req.article
            article.title = req.body.title
            article.author= req.body.author
            article.body= req.body.body
            article.image= req.body.image
            article.createdAt= req.body.createdAt
    
        try {
            article = await article.save();
            console.log('successfully created', article.id);
            res.redirect(`/view/${article.id}`)
        } catch (error) {
            console.log(error)
            res.render('edit', {article : article})
        }
    }
}


module.exports = router;