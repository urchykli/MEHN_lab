const express = require('express')
const router = express.Router()
const recipeController = require('../controllers/recipe')

router.post('/', recipeController.create)
router.get('/new', recipeController.new)
router.get('/:id', recipeController.show)
router.patch('/:id', recipeController.update)
router.delete('/:id', recipeController.destroy)
router.get('/nicole', (req, res) => {
    console.log('hello')
})

module.exports = router