const express = require('express')
const router = express.Router()
const recipeController = require('../controllers/recipe')

router.post('/', recipeController.create)
router.get('/:id', recipeController.show)
router.patch('/:id', recipeController.update)
router.delete('/:id', recipeController.delete)

module.exports = router