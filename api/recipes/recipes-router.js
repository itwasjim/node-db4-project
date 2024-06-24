const router = require('express').Router()
const Recipe = require('./recipes-model')

router.get('./:recipe_id', (req, res, next) => {
    Recipe.getRecipeById(req.params.recipe_id)
    .then(ressource => {
        res.status(200).json(ressource)
    })
    .catch(next)
})

router.use((err, req, res, next) => {
    res.json({ 
        customMessage: 'An Error Occured',
        message: err.message,
        stack: err.stack,
    })
})

module.exports = router