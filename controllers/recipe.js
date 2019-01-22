const Recipe = require('../models/Recipe')

module.exports = {
    nicole: (req, res) => {
        res.render("nicole")
    },
    create: (req, res) => {
        Recipe.create({
            title: req.body.recipe.title,
            description: req.body.recipe.description,
            ingredients: req.body.recipe.ingredients.split(","),
            instructions: req.body.recipe.instructions.split(",")
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
    delete: (req, res) => {
        Recipe.findOneAndRemove({ _id: req.params.id })
        .then(recipe => {
            res.redirect('/')
        })
    }
}