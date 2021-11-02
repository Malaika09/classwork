const mongoose = require("mongoose");
mongoose.connect('mongodb://localhost/CoftTech');

const userSchema = new mongoose.Schema({
    foodName: {
        type: String,
        required: true
    },
    days: {
        type: Number,
        required: true
    },
});
const Food = mongoose.model("Food", FoodSchema);    //pass the schema to the model in mongoose
module.exports = Food;                                 //we need to access this module to perform CRUD
