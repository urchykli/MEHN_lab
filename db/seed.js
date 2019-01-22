const User = require("../models/User");
const Recipe  = require("../models/Recipe");

User.create({
    username: "Stu",
    email: "fake@fake.com",
    password: "password"
})

Recipe.create({
    title: "Popcorn",
    description: "It's popcorn",
    ingredients: ["unpopped popcorn", "butter", "salt"],
    instructions: ["use microwave"]
})
