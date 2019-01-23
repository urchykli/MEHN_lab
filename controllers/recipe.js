const Recipe = require('../models/Recipe')

module.exports = {
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
        let { description } = req.body.recipe
        Recipe.findOneAndUpdate(
            { _id: req.params.id}, 
            {$set: {description: description}})
        .then((req, res) => {res.redirect('/')})
    },
    delete: (req, res) => {
        Recipe.findOneAndRemove({ _id: req.params.id })
        .then( () => {
            res.redirect('/')
        })
    },
    edit: (req, res) => {
        res.render('recipe/edit', {id: req.params.id})
    }
}