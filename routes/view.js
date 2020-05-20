const express = require('express');
const router = express.Router();
const Article = require('../models/article')

router.get('/:id', async (req, res)=>{
    const article = await Article.findById(req.params.id)
    if ( article == null){
        console.log('nothing here')
        res.redirect('/')
    }else{
        res.render('view', {article: article} )
    }
})

module.exports = router;