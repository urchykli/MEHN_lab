const Recipe = require('../models/Recipe')

module.exports = {
    index: (req, res) => {
        Recipe.find({})
        .sort({ createdAt: -1 })
        .limit(7)
        .populate("user")
        .then(recipes => {
            res.render("app/index", { recipes })
        })
    }
}
