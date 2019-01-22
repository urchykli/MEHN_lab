const Recipe = require('../models/Recipe')

module.exports = {
    create: (req, res) => {
        Recipe.create({
            title: req.body.recipe.title,
            // description: req.body.recipe.description,
            // ingredients: req.body.recipe.ingredients,
            // instructions: req.body.recipe.instructions
        })
        .then(recipe => {
            res.redirect(`recipe/${recipe._id}`)
        })
    },
    new: (req, res) => {
        res.render('recipe/new')
    },
    show: (req, res) => {
        Recipe.findOne({ _id: req.params.id })
        .populate("user")
        .then(recipe => {
            console.log(recipe)
            res.render("recipe/show", { recipe })
        })
    },
    update: (req, res) => {
        Recipe.findOne({ _id: req.params.id})
        .then(recipe => {
            recipe.description = req.body.recipe.description
        })
        recipe.save(err => {
            res.redirect(`recipe/${recipe._id}`)
        })
    },
    destroy: (req, res) => {
        Recipe.remove({ _id: req.params.id })
        recipe.save(err => {
            res.redirect(`/`)
        })
    }
}